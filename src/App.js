import { useState } from "react";
import { Header, Hero, PageHeader, Layout } from "./components";

function App() {
  return (
    <div id="App">
      <div className="flex flex-col">
        <Header />
        <Hero />
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </div>
    </div>
  );
}

export default App;
