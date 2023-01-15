import type { AppProps } from "next/app";
import { css, Global } from "@emotion/react";

import { colors, global } from "@styles/global";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global
          styles={css`
            ${colors}
            ${global}
          `}
        />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
