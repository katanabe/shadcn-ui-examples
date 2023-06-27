import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path';

const config: StorybookConfig = {
  stories: ["./docs/**/*.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config) {
    if (config && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    }
  }

    return config;
  },
};
export default config;
