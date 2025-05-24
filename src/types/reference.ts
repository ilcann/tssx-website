import type { ReactNode } from "react";

export type CountryFeature = {
  id: string;
  properties?: {
    name?: string;
  };
  geometry?: {
    type: string;
    coordinates:
      | number[][][]
      | number[][][][]
      | number[][][][][]
      | number[][][][][][];
  };
};

export type CountryGroup = {
  name: string;
  clients: string[];
};

export type ReferenceLocationProps = {
  icon: ReactNode;
  country: string;
  clients: string[];
};

export type GeoProperties = {
  name?: string;
  [key: string]: string | number | undefined;
};
