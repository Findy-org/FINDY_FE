import { ComponentPropsWithoutRef } from 'react';

export type Coordinates = {
  /**
   * Latitude coordinate for the map center.
   * @default 37.549681
   */
  lat: number;

  /**
   * Longitude coordinate for the map center.
   * @default 126.991911
   */
  lng: number;
};

export type Props = {
  /*
   * Optional initial center coordinates for the map, with latitude (`lat`) and longitude (`lng`).
   */
  initialCenter?: Coordinates;
  /**
   * Optional initial zoom level for the map.
   * @default 13
   * @min 1
   * @max 21
   */
  initialZoom?: number;
  /**
   * Determines whether the map centers on the user's current position.
   * @default false
   */
  isCurrent?: boolean;
  /**
   * Optional React nodes to be rendered as children within the map container.
   */
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;
