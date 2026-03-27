import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  FlaskConical,
  TrendingUp,
  Eye,
  MousePointerClick,
  ArrowDown,
  ShoppingCart,
  BarChart3,
  Target,
} from 'lucide-react';
import { testHypotheses } from '../data/content';
import type { TestHypothesis } from '../data/types';

const priorityConfig = {
  high: { label: 'High Priority', color: 'bg-red-50 text-red-700 border-red-200' },
  medium: { label: 'Medium Priority', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  low: { label: 'Low Priority', color: 'bg-blue-50 text-blue-700 border-blue-200' },
};

const statusConfig = {
  ready: { label: 'Ready to Test', color: 'bg-sage/10 text-sage' },
  running: { label: 'Running', color: 'bg-amber-100 text-amber-700' },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-700' },
};

const metricIcons: Record<string, React.FC<{ className?: string }>> = {
  'Click-through rate (CTR)': MousePointerClick,
  'Add-to-cart rate': ShoppingCart,
  'Conversion rate': Target,
  'Scroll depth': ArrowDown,
  'Bounce rate': Eye,
  'FAQ interaction rate': BarChart3,
};

const summaryMetrics = [
  { label: 'Click-through Rate', value: '3.2%', trend: '+0.4%', icon: MousePointerClick },
  { label: 'Scroll Depth', value: '68%', trend: '+12%', icon: ArrowDown },
  { label: 'Add-to-Cart Rate', value: '8.7%', trend: '+1.2%', icon: ShoppingCart },
  { label: 'Conversion Rate', value: '4.1%', trend: '+0.6%', icon: Target },
  { label: 'FAQ Interaction', value: '22%', trend: '+5%', icon: BarChart3 },
  { label: 'Bounce Rate', value: '38%', trend: '-3%', icon: Eye },
];

function HypothesisCard({ hypothesis }: { hypothesis: TestHypothesis }) {
  const priority = priorityConfig[hypothesis.priority];
  const status = statusConfig[hypothesis.status];
  const MetricIcon = metricIcons[hypothesis.metric] || TrendingUp;

  return (
    <article className="bg-white rounded-2xl border border-cream-dark/60 p-5 md:p-6 hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${priority.color}`}>
            {priority.label}
          </span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${status.color}`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading text-base font-semibold text-midnight mb-2">
        {hypothesis.title}
      </h3>

      {/* Hypothesis */}
      <p className="text-sm text-muted leading-relaxed mb-3 flex-1">
        {hypothesis.hypothesis}
      </p>

      {/* Why it matters */}
      <div className="bg-cream/60 rounded-lg p-3 mb-4">
        <p className="text-xs font-semibold text-sage uppercase tracking-wider mb-1">Why it matters</p>
        <p className="text-xs text-slate leading-relaxed">{hypothesis.why}</p>
      </div>

      {/* Metric & Impact */}
      <div className="flex items-center justify-between pt-3 border-t border-cream-dark/60">
        <div className="flex items-center gap-2">
          <MetricIcon className="w-4 h-4 text-sage" />
          <span className="text-xs text-muted">{hypothesis.metric}</span>
        </div>
        <span className="text-xs font-semibold text-sage bg-sage/10 px-2 py-0.5 rounded-full">
          {hypothesis.expectedImpact}
        </span>
      </div>
    </article>
  );
}

export function TestingBoard() {
  const highPriority = testHypotheses.filter((h) => h.priority === 'high');
  const mediumPriority = testHypotheses.filter((h) => h.priority === 'medium');
  const lowPriority = testHypotheses.filter((h) => h.priority === 'low');

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-sage transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Landing Page
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-6 h-6 text-sage" />
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-midnight">
                  Testing Board
                </h1>
              </div>
              <p className="text-sm text-muted max-w-xl">
                Experimentation priorities for the Stillwell Calm Mist paid social landing page. Each hypothesis is ranked by expected conversion impact and ease of implementation.
              </p>
            </div>
            <span className="text-xs text-muted whitespace-nowrap">
              {testHypotheses.length} hypotheses &middot; {highPriority.length} high priority
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Metrics Dashboard */}
        <section className="mb-10" aria-label="Key metrics">
          <h2 className="text-xs font-semibold tracking-[0.15em] uppercase text-sage mb-4">
            Baseline Metrics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {summaryMetrics.map((metric) => {
              const Icon = metric.icon;
              const isPositive = metric.trend.startsWith('+') || metric.trend.startsWith('-');
              const isGood = metric.label === 'Bounce Rate'
                ? metric.trend.startsWith('-')
                : metric.trend.startsWith('+');

              return (
                <div
                  key={metric.label}
                  className="bg-white rounded-xl border border-cream-dark/60 p-4 text-center"
                >
                  <Icon className="w-4 h-4 text-muted mx-auto mb-2" />
                  <p className="text-lg font-heading font-bold text-midnight">{metric.value}</p>
                  <p className="text-[11px] text-muted mt-0.5 mb-1.5">{metric.label}</p>
                  {isPositive && (
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        isGood ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {metric.trend}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* High Priority */}
        <section className="mb-10" aria-label="High priority tests">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Test First
            </h2>
            <span className="text-xs text-muted ml-1">({highPriority.length})</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highPriority.map((h) => (
              <HypothesisCard key={h.id} hypothesis={h} />
            ))}
          </div>
        </section>

        {/* Medium Priority */}
        <section className="mb-10" aria-label="Medium priority tests">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Test Next
            </h2>
            <span className="text-xs text-muted ml-1">({mediumPriority.length})</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mediumPriority.map((h) => (
              <HypothesisCard key={h.id} hypothesis={h} />
            ))}
          </div>
        </section>

        {/* Low Priority */}
        <section className="mb-10" aria-label="Low priority tests">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Backlog
            </h2>
            <span className="text-xs text-muted ml-1">({lowPriority.length})</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lowPriority.map((h) => (
              <HypothesisCard key={h.id} hypothesis={h} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
