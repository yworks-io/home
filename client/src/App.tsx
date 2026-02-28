import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import PolymarketSignal from "./pages/blog/PolymarketSignal";
import ConwayAutomaton from "./pages/blog/ConwayAutomaton";
import ErrorDetection from "./pages/blog/ErrorDetection";
import OntologyIdentity from "./pages/blog/OntologyIdentity";
import DayOne from "./pages/blog/DayOne";
import OntologySlides from "./pages/blog/OntologySlides";
import XAutomation from "./pages/blog/XAutomation";
import AgentCardMistake from "./pages/blog/AgentCardMistake";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/polymarket-as-macro-signal"} component={PolymarketSignal} />
      <Route path={"/blog/conway-automaton"} component={ConwayAutomaton} />
      <Route path={"/blog/error-detection-trap"} component={ErrorDetection} />
      <Route path={"/blog/ontology-as-identity"} component={OntologyIdentity} />
      <Route path={"/blog/day-one"} component={DayOne} />
      <Route path={"/blog/ontology-slides"} component={OntologySlides} />
      <Route path={"/blog/x-automation"} component={XAutomation} />
      <Route path={"/blog/agentcard-mistake"} component={AgentCardMistake} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
