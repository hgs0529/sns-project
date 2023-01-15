import styled from "@emotion/styled";
import React from "react";
import Header from "@components/ui/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Layout;
