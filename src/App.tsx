import "./App.css";
import { useEffect } from "react";
import * as WASMLib from "../src-assembly/bin/module.js";

export default function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="text-7xl">Radu's portfolio website, WIP</h1>
          <h3>built with 🫀</h3>
          <h3>using Vite, React &amp; Cloudflare workers</h3>
          <h3 className="text-yellow-200 mt-8 font-semibold">Bonus: {WASMLib.getContent()}</h3>
        </header>
      </div>
      <div className="App-bg-image-container">
        <img
          className="App-bg-image"
          srcSet="
      /images/bg-640.webp 640w,
      /images/bg-1280.webp 1280w,
      /images/bg-1920.webp 1920w,
      /images/bg-original.webp,
      "
        />
      </div>
    </>
  );
}
