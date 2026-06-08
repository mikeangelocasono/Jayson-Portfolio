declare module "recharts" {
  import React from "react";

  export const Area: any;
  export const AreaChart: any;
  export const Bar: any;
  export const BarChart: any;
  export const CartesianGrid: any;
  export const Cell: any;
  export const Legend: any;
  export const Line: any;
  export const LineChart: any;
  export const Pie: any;
  export const PieChart: any;
  export const PolarAngleAxis: any;
  export const PolarGrid: any;
  export const Radar: any;
  export const RadarChart: any;
  export const ResponsiveContainer: any;
  export const Tooltip: any;
  export const XAxis: any;
  export const YAxis: any;
  export const Label: any;
  export const LabelList: any;

  export interface LegendProps {
    payload?: any[];
    verticalAlign?: "top" | "middle" | "bottom";
    [key: string]: any;
  }

  export interface TooltipProps {
    [key: string]: any;
  }

  export type ContentType = React.ComponentType<any>;
}
