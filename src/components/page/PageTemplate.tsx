import React from "react";
import { PageBody } from "./PageBody";
import { PageContainer } from "./PageContainer";
import { PageMain } from "./PageMain";
import { PageTabBar } from "./PageTabBar";
import { PageToolBar } from "./PageToolBar";
import { PageWrapper } from "./PageWrapper";

export const PageTemplate = (): JSX.Element => (
  <PageWrapper repository="test">
    <PageContainer>
      <PageTabBar
        tabNames={Array(20)
          .fill(0)
          .map((_, i) => `test${i}`)}
        onChange={() => window.alert("change")}
        value={1}
      />
      <PageBody>
        <PageToolBar right={<button>tool bar</button>} />
        <PageMain>
          main <br />
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
              </div>
            ))}
        </PageMain>
      </PageBody>
    </PageContainer>
  </PageWrapper>
);
