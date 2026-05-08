import type { CompanyRegion, DimensionWeights, Role } from "@/types/interview";

interface CompanyIntel {
  region: CompanyRegion;
  dimensionWeights: DimensionWeights;
  interviewStructure: string;
  hiringBarByRole: Record<Role, string>;
  whatMakesThemDifferent: string;
}

export const companyIntelligence: Record<string, CompanyIntel> = {
  swiggy: {
    region: "india",
    dimensionWeights: { problemFraming: 3, userEmpathy: 4, prioritizationRationale: 4, metricDefinition: 5, tradeoffAwareness: 4 },
    interviewStructure: "4 rounds: Product Sense, Execution/Metrics, Behavioral, Bar Raiser",
    hiringBarByRole: { APM: "Avg 2.8+. Strong on structured thinking.", PM: "Avg 3.2+. Must nail unit economics and metrics.", SPM: "Avg 3.8+. No dim below 3. P&L ownership expected." },
    whatMakesThemDifferent: "Tests 3-sided marketplace thinking. If you can't debug a metric, you won't pass."
  },
  zomato: {
    region: "india",
    dimensionWeights: { problemFraming: 3, userEmpathy: 5, prioritizationRationale: 3, metricDefinition: 4, tradeoffAwareness: 3 },
    interviewStructure: "3-4 rounds: Product Sense, Culture Fit, Execution, sometimes Guesstimate",
    hiringBarByRole: { APM: "Avg 2.5+. Raw hustle and consumer empathy matter more than frameworks.", PM: "Avg 3.0+. Must show bias for action and retention thinking.", SPM: "Avg 3.5+. Category creation and scaling questions." },
    whatMakesThemDifferent: "Values 'founder mentality'. Less structured, more conversational. Product intuition over process."
  },
  cred: {
    region: "india",
    dimensionWeights: { problemFraming: 4, userEmpathy: 5, prioritizationRationale: 3, metricDefinition: 2, tradeoffAwareness: 5 },
    interviewStructure: "3-4 rounds: Product Sense (always), Culture Fit (bar raiser with leadership), Execution, sometimes Design",
    hiringBarByRole: { APM: "Avg 2.8+. Must score 3+ on User Empathy. Premium product taste is non-negotiable.", PM: "Avg 3.2+. Monetization thinking without alienating premium users.", SPM: "Avg 3.8+. No dim below 3. P&L-level thinking expected." },
    whatMakesThemDifferent: "Tests premium cohort reasoning. If your answer could apply to Flipkart, it fails at CRED."
  },
  razorpay: {
    region: "india",
    dimensionWeights: { problemFraming: 5, userEmpathy: 3, prioritizationRationale: 4, metricDefinition: 4, tradeoffAwareness: 4 },
    interviewStructure: "4 rounds: Product Sense, System Design/Execution, Behavioral, Hiring Manager",
    hiringBarByRole: { APM: "Avg 2.8+. Must understand B2B workflows and API thinking.", PM: "Avg 3.2+. Complex integrations and developer empathy.", SPM: "Avg 3.8+. Platform strategy and competitive positioning." },
    whatMakesThemDifferent: "B2B product thinking, not consumer intuition. Must reason about developer experience and compliance."
  },
  phonepe: {
    region: "india",
    dimensionWeights: { problemFraming: 3, userEmpathy: 4, prioritizationRationale: 4, metricDefinition: 5, tradeoffAwareness: 3 },
    interviewStructure: "4 rounds: Product Sense, Execution, Behavioral, Leadership",
    hiringBarByRole: { APM: "Avg 2.5+. Mass-market pain points and basic data analysis.", PM: "Avg 3.2+. Cross-sell funnels and scale optimization.", SPM: "Avg 3.8+. Ecosystem strategy and regulated market navigation." },
    whatMakesThemDifferent: "Scale thinking is everything. 500M+ users means every edge case matters."
  },
  meesho: {
    region: "india",
    dimensionWeights: { problemFraming: 3, userEmpathy: 5, prioritizationRationale: 3, metricDefinition: 3, tradeoffAwareness: 3 },
    interviewStructure: "3-4 rounds: Product Sense, Execution, Culture Fit, sometimes Design",
    hiringBarByRole: { APM: "Avg 2.5+. Must empathize with tier-2/3 users genuinely.", PM: "Avg 3.0+. Operational metrics like RTO and shipping cost.", SPM: "Avg 3.5+. Platform health and business model transitions." },
    whatMakesThemDifferent: "If you design for urban India, you fail. Must think in vernacular, low-bandwidth, trust-first terms."
  },
  zepto: {
    region: "india",
    dimensionWeights: { problemFraming: 3, userEmpathy: 3, prioritizationRationale: 5, metricDefinition: 5, tradeoffAwareness: 4 },
    interviewStructure: "3-4 rounds: Product Sense, Execution/Metrics, Behavioral, Founder Round",
    hiringBarByRole: { APM: "Avg 2.8+. App funnel optimization and operational thinking.", PM: "Avg 3.2+. Dark store economics and speed vs AOV tradeoffs.", SPM: "Avg 3.8+. Category expansion and path to profitability." },
    whatMakesThemDifferent: "Operational efficiency obsession. Every product decision must survive a unit economics stress test."
  },
  groww: {
    region: "india",
    dimensionWeights: { problemFraming: 4, userEmpathy: 5, prioritizationRationale: 3, metricDefinition: 4, tradeoffAwareness: 3 },
    interviewStructure: "3-4 rounds: Product Sense, Execution, Behavioral, Leadership",
    hiringBarByRole: { APM: "Avg 2.5+. UI/UX intuition and simplification thinking.", PM: "Avg 3.0+. Retention (SIP continuation) and cross-sell.", SPM: "Avg 3.5+. Regulated product strategy and trust building." },
    whatMakesThemDifferent: "Can you make complex financial concepts feel simple? If your design needs a tutorial, you've failed."
  },
  dream11: {
    region: "india",
    dimensionWeights: { problemFraming: 3, userEmpathy: 5, prioritizationRationale: 3, metricDefinition: 4, tradeoffAwareness: 4 },
    interviewStructure: "3-4 rounds: Product Sense, Gamification/Engagement, Behavioral, Leadership",
    hiringBarByRole: { APM: "Avg 2.5+. Gamification mechanics and social features.", PM: "Avg 3.0+. Retention post-IPL and casual vs power user balance.", SPM: "Avg 3.5+. New sports expansion and regulatory navigation." },
    whatMakesThemDifferent: "User psychology is the product. Must understand casual vs power user dynamics and engagement loops."
  },
  flipkart: {
    region: "india",
    dimensionWeights: { problemFraming: 4, userEmpathy: 4, prioritizationRationale: 4, metricDefinition: 5, tradeoffAwareness: 4 },
    interviewStructure: "4-5 rounds: Product Sense, Execution, Guesstimate, Behavioral, Bar Raiser",
    hiringBarByRole: { APM: "Avg 2.8+. Data orientation and funnel optimization.", PM: "Avg 3.2+. GMV driving and cross-functional leadership.", SPM: "Avg 3.8+. Strategic initiatives and category profitability." },
    whatMakesThemDifferent: "India-first innovation at massive scale. Must handle diverse user segments from metro to rural."
  },
  google: {
    region: "global",
    dimensionWeights: { problemFraming: 5, userEmpathy: 4, prioritizationRationale: 5, metricDefinition: 5, tradeoffAwareness: 5 },
    interviewStructure: "4-5 rounds: Product Sense, Execution, Technical, Behavioral, Googleyness",
    hiringBarByRole: { APM: "Avg 3.0+. High bar for analytical rigor even at entry level.", PM: "Avg 3.5+. Systems thinking and scale. No weak dimensions.", SPM: "Avg 4.0+. Strategic vision and cross-product integration." },
    whatMakesThemDifferent: "Highest bar across all dimensions. Systems thinking at billion-user scale. Technical intuition expected."
  },
  meta: {
    region: "global",
    dimensionWeights: { problemFraming: 3, userEmpathy: 4, prioritizationRationale: 4, metricDefinition: 5, tradeoffAwareness: 4 },
    interviewStructure: "4-5 rounds: Product Sense, Execution, Leadership, Behavioral",
    hiringBarByRole: { APM: "Avg 2.8+. Social dynamics and basic growth loops.", PM: "Avg 3.2+. Metric impact and experiment design.", SPM: "Avg 3.8+. Platform strategy and family-of-apps vision." },
    whatMakesThemDifferent: "Growth and engagement obsession. Must define metrics precisely. Network effects thinking is table stakes."
  },
  amazon: {
    region: "global",
    dimensionWeights: { problemFraming: 4, userEmpathy: 5, prioritizationRationale: 4, metricDefinition: 4, tradeoffAwareness: 5 },
    interviewStructure: "5-6 rounds: Behavioral (LP-based), Product Sense, Execution, Writing (PR/FAQ), Bar Raiser",
    hiringBarByRole: { APM: "Avg 2.8+. Data analysis and bias for action.", PM: "Avg 3.2+. Dive Deep and operational metrics. 6-pager writing.", SPM: "Avg 3.8+. Think Big and P&L impact." },
    whatMakesThemDifferent: "Leadership Principles drive everything. Behavioral questions explicitly test LP alignment. Writing skills matter."
  },
  stripe: {
    region: "global",
    dimensionWeights: { problemFraming: 5, userEmpathy: 4, prioritizationRationale: 4, metricDefinition: 3, tradeoffAwareness: 4 },
    interviewStructure: "4-5 rounds: Product Sense, Systems Design, Writing, Behavioral, Cross-functional",
    hiringBarByRole: { APM: "Avg 3.0+. API design intuition and structured communication.", PM: "Avg 3.5+. Regulatory complexity and global payment methods.", SPM: "Avg 4.0+. Platform strategy and self-serve vs enterprise tension." },
    whatMakesThemDifferent: "Developer empathy and clear writing are non-negotiable. Must abstract financial complexity into simple APIs."
  },
  notion: {
    region: "global",
    dimensionWeights: { problemFraming: 4, userEmpathy: 5, prioritizationRationale: 4, metricDefinition: 3, tradeoffAwareness: 5 },
    interviewStructure: "4 rounds: Product Sense, Design Craft, Execution, Culture Fit",
    hiringBarByRole: { APM: "Avg 2.8+. Product taste and elegant solution design.", PM: "Avg 3.2+. Collaboration features and personal-to-enterprise transition.", SPM: "Avg 3.8+. Platform strategy and Notion AI monetization." },
    whatMakesThemDifferent: "Design craftsmanship and 'tools for thought' philosophy. Flexibility vs simplicity is the core tension."
  },
};
