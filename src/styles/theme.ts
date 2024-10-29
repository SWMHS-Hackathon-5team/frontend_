import { css, SerializedStyles } from "@emotion/react";

export interface Theme {
  text: {
    title: {
      largeM: SerializedStyles;
      mediumB: SerializedStyles;
      mediumR: SerializedStyles;
      smallB: SerializedStyles;
      smallR: SerializedStyles;
    };
    body: {
      largeB: SerializedStyles;
      largeR: SerializedStyles;
      mediumB: SerializedStyles;
      mediumR: SerializedStyles;
    };
    caption1: {
      mediumB: SerializedStyles;
      mediumR: SerializedStyles;
    };
    caption2: {
      mediumB: SerializedStyles;
      mediumR: SerializedStyles;
    };
  };
  color: {
    main: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    main2: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    system: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    system2: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    white: string;
    black: string;
  };
}

const text = {
  title: {
    largeM: css`
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.4rem;
    `,
    mediumB: css`
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.8rem;
    `,
    mediumR: css`
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.8rem;
    `,
    smallB: css`
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.5rem;
    `,
    smallR: css`
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.5rem;
    `,
  },
  body: {
    largeB: css`
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.35rem;
    `,
    largeR: css`
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.35rem;
    `,
    mediumB: css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.2rem;
    `,
    mediumR: css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.2rem;
    `,
  },
  caption1: {
    mediumB: css`
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.225rem;
    `,
    mediumR: css`
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.225rem;
    `,
  },
  caption2: {
    mediumB: css`
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1.05rem;
    `,
    mediumR: css`
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.05rem;
    `,
  },
};

const color = {
  main: {
    800: "#F9AA38",
    700: "#FAB859",
    600: "#FBC67A",
    500: "#FCD59C",
    400: "#FDE3BD",
    300: "#FDE3BD",
    200: "#FEF1DE",
    100: "#FFF8EF",
  },
  main2: {
    800: "#AEE0E1",
    700: "#B7E3E4",
    600: "#C0E7E8",
    500: "#C9EAEB",
    400: "#D2EEEE",
    300: "#DBF1F2",
    200: "#E4F5F5",
    100: "#EDF8F8",
  },
  gray: {
    900: "#434343",
    800: "#474747",
    700: "#7B7B7B",
    600: "#A7A7A7",
    500: "#ABABAB",
    400: "#BDBDBD",
    300: "#D5D5D5",
    200: "#ECECEC",
    100: "#F9F9F9",
  },
  system: {
    600: "#d62828",
    500: "#DE5353",
    400: "#E67E7E",
    300: "#EFA9A9",
    200: "#F7D4D4",
    100: "#FBEAEA",
  },
  system2: {
    600: "#4AB519",
    500: "#68C13F",
    400: "#86CE66",
    300: "#A5DA8C",
    200: "#C3E6B2",
    100: "#E1F3D9",
  },
  white: "#FFFFFF",
  black: "#121212",
};

const theme = {
  text,
  color,
} as Theme;

export default theme;
