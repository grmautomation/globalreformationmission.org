/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Every route should preserve formal hierarchy, scripture-centered language, restrained gold rules, and mission movement.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SiteLayout from "./components/SiteLayout";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Devotions from "./pages/Devotions";
import Give from "./pages/Give";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import NotFound from "./pages/NotFound";
import Stream from "./pages/Stream";
import Teachings from "./pages/Teachings";
import Visit from "./pages/Visit";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/visit" component={Visit} />
        <Route path="/about" component={About} />
        <Route path="/mission" component={Mission} />
        <Route path="/teachings" component={Teachings} />
        <Route path="/stream" component={Stream} />
        <Route path="/give" component={Give} />
        <Route path="/connect" component={Connect} />
        <Route path="/devotions" component={Devotions} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
