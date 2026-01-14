"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import {
  getCandlestickConfig,
  getChartConfig,
  PERIOD_BUTTONS,
  PERIOD_CONFIG,
} from "./constants";
import {
  CandlestickSeries,
  createChart,
  IChartApi,
  ISeriesApi,
} from "lightweight-charts";
import { fetcher } from "@/lib/coingecko.actions";
import { convertOHLCData } from "@/lib/utils";

const CandleStickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = "daily",
}: CandlestickChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState(initialPeriod);
  const [ohlcData, setOhlcData] = useState<OHLCData[]>(data ?? []);

  const [isPending, startTransition] = useTransition();

  const fetchOHLCData = async (selectedPeriod: Period) => {
    try {
      const { days, interval } = PERIOD_CONFIG[selectedPeriod];

      const newOHLCData = await fetcher<OHLCData[]>(`/coins/${coinId}/ohlc`, {
        vs_currency: "usd",
        days,
        // interval,
        precision: "full",
      });
      setOhlcData(newOHLCData); // 再次触发重新渲染（实际的图表数据更新）
    } catch (error) {
      console.error("Failed to fetch OHLC data:", error);
    }
  };

  const handlePeriodChange = (newPeriod: Period) => {
    if (newPeriod === period) return;
    startTransition(() => {
      setPeriod(newPeriod); // 此处触发重新渲染（按钮样式的切换），响应用户的点击操作
      fetchOHLCData(newPeriod); // 异步的获取数据，根据Period加载最新的ohlcData
    });
  };

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    const showTime = ["daily", "weekly", "monthly"].includes(period);
    const chart = createChart(container, {
      ...getChartConfig(height, showTime),
      width: container.clientWidth,
    });
    // 保存ref为了方便更新和销毁
    const series = chart.addSeries(CandlestickSeries, getCandlestickConfig());
    series.setData(convertOHLCData(ohlcData));
    chart.timeScale().fitContent();

    //
    chartRef.current = chart;
    candleSeriesRef.current = series;

    // 响应式地调整图表宽度
    const observer = new ResizeObserver((entries) => {
      if (!entries.length) return;
      chart.applyOptions({
        width: entries[0].contentRect.width,
      });
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      chart.remove();
      chartRef.current = null;
      candleSeriesRef.current = null;
    };
  }, [height]);

  useEffect(() => {
    if (!candleSeriesRef.current) return;

    const convertToSeconds = ohlcData.map(
      (item) =>
        [
          Math.floor(item[0] / 1000),
          item[1],
          item[2],
          item[3],
          item[4],
        ] as OHLCData,
    );

    const converted = convertOHLCData(convertToSeconds);
    candleSeriesRef.current?.setData(converted);
    chartRef.current?.timeScale().fitContent();
  }, [ohlcData, period]);
  return (
    <div id="candlestick-chart">
      <div className="chart-header">
        <div className="flex-1">{children}</div>
        <div className="button-group">
          <span className="mx-2 text-sm font-medium text-purple-100/50">
            Period:
          </span>
          {PERIOD_BUTTONS.map(({ value, label }) => (
            <button
              key={value}
              className={
                period === value ? "config-button-active" : "config-button"
              }
              onClick={() => handlePeriodChange(value)}
              disabled={loading}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div ref={chartContainerRef} className="chart" style={{ height }} />
    </div>
  );
};

export default CandleStickChart;
