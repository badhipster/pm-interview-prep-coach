import type { Company } from "@/types/interview";
import { companyIntelligence } from "./company-intelligence";

type BaseCompany = Omit<Company, "region" | "dimensionWeights" | "interviewStructure" | "hiringBarByRole" | "whatMakesThemDifferent">;

const baseCompanies: BaseCompany[] = [
  {
    id: "swiggy",
    name: "Swiggy",
    descriptor: "Food delivery, Instamart quick commerce, Swiggy One",
    context: "Swiggy operates food delivery and Instamart (10-min grocery). Key tensions: unit economics on small orders, dark store density, Swiggy One subscription value, Zomato competition.",
    interviewCulture: "Swiggy interviews emphasize structured thinking and RCA. Tests ability to handle 3-sided marketplace dynamics. Expect metric debugging and operational trade-off questions.",
    roleContext: {
      APM: "Evaluated on structured thinking, curiosity, and potential. Focus on user empathy and logical decomposition rather than strategic depth.",
      PM: "Must demonstrate experience with growth metrics, A/B testing, and cross-functional leadership. Expect unit economics questions.",
      SPM: "Deep strategic questions on marketplace dynamics, P&L ownership, and multi-product strategy. Case studies on positioning and subscription economics."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to increase Swiggy One renewals among users from a promotional period.",
        "How would you redesign the home screen to drive cross-pollination to Instamart?",
        "Design a food delivery experience tailored for college students living in hostels."
      ],
      Execution: [
        "Order cancellation rate increased by 15% last month. Diagnose the root cause.",
        "Define top 5 metrics for a new Instamart dark store launch in a Tier 2 city.",
        "Prioritize between improving delivery time prediction vs. reducing support tickets."
      ],
      Behavioral: [
        "Tell me about a time you made a decision that negatively impacted one side of a marketplace.",
        "Describe a feature launch that failed. What did you learn?",
        "Tell me about a time you influenced engineering to prioritize a project they resisted."
      ],
      Design: [
        "Design the delivery partner app experience for a 'scheduled delivery' feature.",
        "Redesign order tracking to reduce 'Where is my order?' support calls by 30%.",
        "Design a rating system that fairly evaluates restaurant quality vs delivery issues."
      ]
    }
  },
  {
    id: "zomato",
    name: "Zomato",
    descriptor: "Food delivery, Blinkit quick commerce, dining out",
    context: "Zomato operates food delivery and Blinkit. Key tensions: Blinkit profitability, Gold membership, dining-out vs delivery cannibalization, District expansion.",
    interviewCulture: "Zomato values 'founder mentality' and bias for action. Interviews are less structured and more conversational, testing raw product intuition and cultural fit.",
    roleContext: {
      APM: "Focus on hustle, customer obsession, and ability to learn quickly. Expect abstract problem-solving and consumer empathy questions.",
      PM: "Expected to own metrics end-to-end. Questions focus on user acquisition, retention, and managing the restaurant partner ecosystem.",
      SPM: "Tested on category creation and scaling. Expect questions on Blinkit integration, new verticals like District, and profitability strategies."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a product for Zomato that doesn't exist yet but solves a major dining pain point.",
        "How would you increase the frequency of orders for users who only order on weekends?",
        "Design the home screen for Zomato's new 'District' (events/movies) service."
      ],
      Execution: [
        "Blinkit's average order value (AOV) dropped by 10%. How do you investigate?",
        "What metrics would you track to evaluate the success of Zomato Gold?",
        "How do you decide which restaurants to feature at the top of the search results?"
      ],
      Behavioral: [
        "Tell me about a time you took a massive risk and it didn't pay off.",
        "Describe a situation where you had to push back on leadership because you believed in the data.",
        "Tell me about a time you had to execute a project with almost no resources."
      ],
      Design: [
        "Design an experience for groups of friends trying to decide where to eat together.",
        "Redesign the restaurant onboarding flow to reduce drop-offs.",
        "Design a feature that encourages users to leave high-quality photo reviews."
      ]
    }
  },
  {
    id: "cred",
    name: "CRED",
    descriptor: "Credit card rewards, premium fintech, CRED Pay",
    context: "CRED targets high-credit-score users with rewards. Key tensions: monetization without alienating premium users, CRED Pay adoption, trust as a moat.",
    interviewCulture: "CRED tests first-principles thinking and premium product intuition. Values understanding high-trust user segments. Bar raiser rounds with senior leadership are common.",
    roleContext: {
      APM: "Focus on product taste, structured thinking, and cultural fit with the 'premium-first' ethos. Expect questions on designing for high-value users.",
      PM: "Deep product sense rounds on monetization, feature prioritization in a premium context, and cross-sell. Strong emphasis on user psychology.",
      SPM: "Focus on P&L-level thinking, financial products strategy, and building trust moats. Strategic questions on platform expansion against banks."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a lending product that leverages our high-trust base without alienating users.",
        "How would you increase CRED Pay adoption at offline merchants without degrading the brand?",
        "Design a feature that makes CRED the default app for any financial decision."
      ],
      Execution: [
        "The number of users claiming rewards dropped by 20% this week. Investigate.",
        "Define the success metrics for a new personal loan feature on CRED.",
        "How do you prioritize adding a new biller category vs. improving the existing payment flow?"
      ],
      Behavioral: [
        "Tell me about a time you prioritized user experience over a short-term revenue gain.",
        "Describe a time you had to build trust with a highly skeptical user base.",
        "Tell me about a time you had to persuade a stakeholder using qualitative insights over hard data."
      ],
      Design: [
        "Redesign the credit card bill payment flow to make it feel more 'rewarding'.",
        "Design an onboarding experience for a new wealth management feature on CRED.",
        "Design a dashboard that helps users understand their spending habits without feeling judged."
      ]
    }
  },
  {
    id: "razorpay",
    name: "Razorpay",
    descriptor: "B2B payments infrastructure, SME banking, payroll",
    context: "Razorpay is a leading B2B payments platform. Key tensions: SME vs enterprise product split, international expansion, RazorpayX growth, fraud/compliance.",
    interviewCulture: "Focuses heavily on B2B product nuances, API design, and system thinking. Expect questions on developer experience, compliance trade-offs, and B2B go-to-market.",
    roleContext: {
      APM: "Evaluated on analytical skills, understanding of APIs, and ability to map complex B2B workflows. Empathy for developers and merchants.",
      PM: "Expected to handle complex integrations, manage technical stakeholders, and drive adoption. Focus on reducing integration time and churn.",
      SPM: "Tested on platform strategy, scaling new verticals (like payroll), and competitive positioning against legacy banks and new fintechs."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a payment solution for independent creators who sell digital goods on social media.",
        "How would you improve the developer experience for integrating the Razorpay payment gateway?",
        "Design a feature to help SMEs manage their cash flow better."
      ],
      Execution: [
        "Transaction failure rates spiked by 5% over the weekend. How do you diagnose the issue?",
        "What are the top 3 metrics you would track for the launch of a new payroll product?",
        "How do you prioritize building a feature requested by one massive enterprise client vs. 100 small merchants?"
      ],
      Behavioral: [
        "Tell me about a time you had to balance regulatory compliance with user experience.",
        "Describe a situation where you had to manage conflicting priorities between engineering and sales teams.",
        "Tell me about a time you built a product that failed to gain traction with developers."
      ],
      Design: [
        "Redesign the merchant dashboard to highlight actionable insights on payment failures.",
        "Design an API documentation portal that is easy to navigate for both novice and expert developers.",
        "Design a checkout experience that minimizes friction while maintaining high security standards."
      ]
    }
  },
  {
    id: "phonepe",
    name: "PhonePe",
    descriptor: "UPI payments, insurance, wealth, super-app",
    context: "PhonePe is India's largest UPI app. Key tensions: monetizing zero-MDR UPI, insurance/mutual fund distribution, super-app ambitions, merchant PoS.",
    interviewCulture: "Values scale and execution. Interviews focus on mass-market consumer behavior, distribution strategies, and moving from a single utility to a multi-product ecosystem.",
    roleContext: {
      APM: "Focus on understanding mass-market pain points, basic data analysis, and execution velocity. Questions on optimizing core flows like UPI transfers.",
      PM: "Expected to drive cross-sell (e.g., UPI to Insurance), manage merchant ecosystems, and improve funnel conversions at scale.",
      SPM: "Tested on ecosystem strategy, monetizing a massive free user base, and competing in highly regulated spaces like wealth and insurance."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a product to encourage users who only use PhonePe for money transfers to buy insurance.",
        "How would you increase the adoption of PhonePe SmartSpeakers among tier-3 merchants?",
        "Design a feature to help users build a habit of saving small amounts daily."
      ],
      Execution: [
        "The success rate of UPI transactions dropped by 2%. Walk me through your RCA.",
        "Define the success metrics for launching a new mutual fund investment flow.",
        "How do you prioritize between adding a new bill payment category vs. optimizing the app load time?"
      ],
      Behavioral: [
        "Tell me about a time you had to launch a product in a highly regulated environment.",
        "Describe a time you had to convince a partner or external stakeholder to change their roadmap.",
        "Tell me about a time you used data to uncover a non-obvious user behavior."
      ],
      Design: [
        "Redesign the transaction history page to make it easier for users to find specific payments.",
        "Design the onboarding flow for a new merchant setting up a PhonePe QR code.",
        "Design an interface that simplifies complex insurance terms for a first-time buyer."
      ]
    }
  },
  {
    id: "meesho",
    name: "Meesho",
    descriptor: "Social commerce, resellers, tier-2/3 India",
    context: "Meesho connects resellers and consumers with suppliers. Key tensions: reseller retention vs direct-to-consumer shift, tier-3 logistics, returns rate.",
    interviewCulture: "Extreme focus on user empathy for tier-2/3/4 India ('Bharat'). Expect questions on low-end device constraints, vernacular interfaces, and trust-building in e-commerce.",
    roleContext: {
      APM: "Evaluated on ability to empathize with non-urban users. Focus on simple, intuitive design and solving basic e-commerce friction points.",
      PM: "Expected to handle complex operational metrics (RTOs, shipping costs) and drive growth loops. Questions on supplier quality and user retention.",
      SPM: "Tested on platform health, transitioning business models (reseller to B2C), and long-term strategy for dominating the value e-commerce segment."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to reduce the Return to Origin (RTO) rate for cash-on-delivery orders.",
        "How would you improve the product discovery experience for a user who doesn't search in English?",
        "Design a loyalty program tailored for Meesho's reseller base."
      ],
      Execution: [
        "The number of new suppliers onboarding to the platform has plateaued. Investigate.",
        "What are the top 5 metrics you would track to measure the health of the supplier ecosystem?",
        "How do you prioritize between reducing delivery times vs. lowering shipping costs for the user?"
      ],
      Behavioral: [
        "Tell me about a time you had to design a product for a user segment very different from yourself.",
        "Describe a situation where an operational constraint completely changed your product roadmap.",
        "Tell me about a time you solved a problem by diving deep into user feedback rather than metrics."
      ],
      Design: [
        "Redesign the product details page to build more trust for first-time online shoppers.",
        "Design a flow that allows users to easily share products on WhatsApp and track sales.",
        "Design an app experience optimized for users with slow internet connections and low storage."
      ]
    }
  },
  {
    id: "zepto",
    name: "Zepto",
    descriptor: "10-minute quick commerce, dark stores, urban India",
    context: "Zepto delivers groceries in 10 min. Key tensions: dark store profitability, SKU selection vs depth, Cafe expansion, AOV growth.",
    interviewCulture: "Hyper-focus on operational efficiency and execution speed. Interviews test your ability to balance consumer experience with brutal supply chain and unit economic realities.",
    roleContext: {
      APM: "Focus on app conversion funnels, basic operational metrics, and fast execution. Expect questions on optimizing the cart and checkout experience.",
      PM: "Expected to manage trade-offs between delivery speed, SKU availability, and AOV. Questions on dark store operations and rider efficiency.",
      SPM: "Tested on category expansion (e.g., Zepto Cafe), strategic positioning against Blinkit/Instamart, and path to profitability at scale."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to increase the Average Order Value (AOV) without significantly increasing delivery time.",
        "How would you integrate a 'Zepto Cafe' (hot food) experience into the existing grocery app?",
        "Design a product solution to handle out-of-stock scenarios gracefully."
      ],
      Execution: [
        "Average delivery time has increased from 10 to 14 minutes in a specific city. Diagnose the issue.",
        "Define the success metrics for launching a new category like electronics on Zepto.",
        "How do you prioritize adding 1000 new SKUs vs. improving the inventory prediction algorithm?"
      ],
      Behavioral: [
        "Tell me about a time you had to execute a project under an impossibly tight deadline.",
        "Describe a situation where you had to make a trade-off between customer experience and operational cost.",
        "Tell me about a time you identified a bottleneck in a physical or operational process and solved it with software."
      ],
      Design: [
        "Redesign the search experience to accommodate a rapidly expanding catalog of products.",
        "Design an interface for pickers in the dark store to assemble orders faster and with fewer errors.",
        "Design a rider app screen that helps them navigate complex apartment complexes more efficiently."
      ]
    }
  },
  {
    id: "groww",
    name: "Groww",
    descriptor: "Retail investing, mutual funds, stocks, Gen-Z first",
    context: "Groww democratized retail investing. Key tensions: educating vs overwhelming new investors, expanding to credit/insurance, SEBI compliance, SIP growth.",
    interviewCulture: "Values simplicity and user education. Interviews focus on making complex financial products accessible. Expect questions on trust, onboarding, and regulatory compliance.",
    roleContext: {
      APM: "Evaluated on UI/UX intuition, understanding of basic financial concepts, and ability to simplify information. Focus on the new user journey.",
      PM: "Expected to drive retention (e.g., SIP continuation), cross-sell new asset classes, and manage integrations with exchanges/AMCs.",
      SPM: "Tested on long-term wealth strategy, launching complex products (like F&O or credit), and navigating the regulatory landscape."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to help first-time investors choose their first mutual fund.",
        "How would you increase the ratio of users who set up a SIP vs. making a one-time investment?",
        "Design an educational module within the app that doesn't feel like a lecture."
      ],
      Execution: [
        "The drop-off rate during the KYC process increased by 8% last week. Investigate.",
        "What metrics would you track to evaluate the success of a new stock-screening tool?",
        "How do you prioritize building advanced trading features for power users vs. simplifying the core flow for beginners?"
      ],
      Behavioral: [
        "Tell me about a time you had to simplify a highly complex process for the end user.",
        "Describe a situation where a regulatory change disrupted your product roadmap.",
        "Tell me about a time you had to build trust with users who were hesitant to use your product."
      ],
      Design: [
        "Redesign the portfolio dashboard to provide better insights during a market downturn.",
        "Design the onboarding flow for a user setting up their first Demat account.",
        "Design an alert system for stock price movements that is useful but not annoying."
      ]
    }
  },
  {
    id: "dream11",
    name: "Dream11",
    descriptor: "Fantasy sports, cricket, gaming, IPL",
    context: "Dream11 is India's largest fantasy sports platform. Key tensions: seasonality (IPL), regulatory risk, casual vs power user balance, new sports.",
    interviewCulture: "Focuses on engagement, gamification, and handling massive scale (especially during IPL). Interviews test your understanding of user psychology and high-concurrency systems.",
    roleContext: {
      APM: "Focus on gamification mechanics, social features, and basic funnel optimization. Expect questions on improving the team creation experience.",
      PM: "Expected to manage user retention post-IPL, balance the ecosystem between casuals and pros, and optimize the contest discovery feed.",
      SPM: "Tested on scaling to new sports, navigating state-level regulations, and long-term engagement strategies beyond fantasy sports."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to keep users engaged on the platform during the off-season (non-IPL months).",
        "How would you make the platform more welcoming for a casual user who feels intimidated by 'pro' players?",
        "Design a social feature that encourages users to play with their real-life friends."
      ],
      Execution: [
        "The number of users joining paid contests dropped by 15% on a major match day. Diagnose the issue.",
        "Define the success metrics for a new 'live fantasy' feature (making changes during the match).",
        "How do you prioritize adding a new sport vs. improving the core cricket fantasy experience?"
      ],
      Behavioral: [
        "Tell me about a time you designed a product feature leveraging gamification or behavioral psychology.",
        "Describe a situation where you had to prepare a product for an extreme spike in traffic or usage.",
        "Tell me about a time you had to pivot your strategy due to a sudden external event or regulation."
      ],
      Design: [
        "Redesign the team creation interface to make it faster and more intuitive for power users.",
        "Design a leaderboard experience that motivates users without making them feel demoralized.",
        "Design an onboarding flow that explains the point system to a user who has never played fantasy sports."
      ]
    }
  },
  {
    id: "flipkart",
    name: "Flipkart",
    descriptor: "E-commerce, Flipkart Minutes, fashion, grocery",
    context: "Flipkart is India's largest e-commerce platform. Key tensions: Amazon competition, quick commerce entry, rural logistics, seller ecosystem.",
    interviewCulture: "Values scale, operational depth, and 'India-first' innovations. Interviews test your ability to handle massive scale, complex supply chains, and diverse user segments.",
    roleContext: {
      APM: "Evaluated on data orientation, structured thinking, and optimizing specific funnel steps (e.g., search to product page).",
      PM: "Expected to own entire categories or complex operational flows (e.g., returns, seller onboarding). Focus on driving GMV and managing cross-functional dependencies.",
      SPM: "Tested on strategic initiatives like 'Flipkart Minutes' (quick commerce), countering Amazon Prime, and driving profitability across categories."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to increase the purchase confidence of users buying high-ticket electronics online.",
        "How would you integrate 'Flipkart Minutes' (quick commerce) into the main Flipkart app without causing confusion?",
        "Design an experience to help users discover fashion items that fit their specific body type."
      ],
      Execution: [
        "Cart abandonment rate increased by 5% during the 'Big Billion Days' sale. Investigate.",
        "What are the top 5 metrics you would track to measure the success of the Flipkart Plus loyalty program?",
        "How do you prioritize between improving the search ranking algorithm vs. offering more payment options at checkout?"
      ],
      Behavioral: [
        "Tell me about a time you managed a project with multiple, competing cross-functional stakeholders.",
        "Describe a situation where you had to make a tough call during a high-stakes launch or event.",
        "Tell me about a time you used data to identify and fix a major inefficiency in a process."
      ],
      Design: [
        "Redesign the checkout flow to reduce friction for users relying on cash-on-delivery.",
        "Design a seller dashboard that helps small businesses optimize their pricing strategy.",
        "Design an interface for users to easily track and manage multiple orders simultaneously."
      ]
    }
  },
  {
    id: "google",
    name: "Google",
    descriptor: "Search, Maps, YouTube, Android, ads",
    context: "Google's core is search and ads. Key tensions: AI search cannibalizing ad clicks, YouTube monetization, Android ecosystem health.",
    interviewCulture: "Emphasizes 'Systems Thinking at Scale'. Looks for technical intuition, ability to balance user needs with massive scale, and clear metric definition.",
    roleContext: {
      APM: "Evaluates raw potential, intellectual curiosity, and structured problem decomposition. Simpler design questions but high bar for analytical rigor.",
      PM: "Tests product sense, technical chops, and leadership. Must demonstrate ability to work with complex systems and define metrics at scale.",
      SPM: "Focuses on strategic vision, org leadership, and track record of impact. Questions on multi-year strategy and cross-product integration."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a product for Google that helps small businesses manage their online presence across Search, Maps, and YouTube.",
        "How would you improve Google Maps for users in emerging markets with low connectivity?",
        "YouTube Shorts engagement is growing but watch time per user is declining. How would you address this?"
      ],
      Execution: [
        "Google Search result click-through rate dropped by 5% last quarter. How would you diagnose this?",
        "Define the success metrics for a new Google Maps feature that recommends EV charging stops.",
        "Prioritize between improving Google Translate accuracy for low-resource languages vs. adding real-time conversation mode."
      ],
      Behavioral: [
        "Tell me about a time you balanced user privacy concerns against a feature that would improve user experience.",
        "Describe a situation where you had to make a decision with incomplete data at scale.",
        "Tell me about a time you drove alignment across multiple engineering teams with competing priorities."
      ],
      Design: [
        "Redesign Google Calendar for users managing personal and professional schedules across time zones.",
        "Design an accessibility feature for Google Meet that goes beyond closed captions.",
        "Design a parental controls experience for YouTube balancing child safety with content discovery."
      ]
    }
  },
  {
    id: "meta",
    name: "Meta",
    descriptor: "Facebook, Instagram, WhatsApp, Reels, monetization",
    context: "Meta runs the world's largest social graph. Key tensions: Reels monetization, WhatsApp business messaging revenue, AI integration, ad targeting.",
    interviewCulture: "Obsessed with 'Growth and Engagement'. Interviews lean into user psychology, network effects, and clear goal setting. Prizes results-oriented thinking.",
    roleContext: {
      APM: "Focus on understanding social dynamics, basic growth loops, and structured thinking. Expect questions on improving specific engagement metrics.",
      PM: "Expected to drive significant metric impact, run complex experiments, and manage stakeholder relationships. Questions on balancing engagement with integrity/safety.",
      SPM: "Tested on platform-wide strategy, launching new surfaces (e.g., Threads), and defining the long-term vision for family of apps integration."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature for Instagram that encourages closer connections between users and their 'close friends'.",
        "How would you monetize WhatsApp without relying on traditional display advertising?",
        "Design a product to help creators collaborate more effectively on Reels."
      ],
      Execution: [
        "Engagement on Facebook Groups dropped by 10% in the last week. Investigate the root cause.",
        "Define the North Star and secondary metrics for the launch of Meta AI avatars.",
        "How do you prioritize between showing more Reels in the Instagram feed vs. showing more posts from friends?"
      ],
      Behavioral: [
        "Tell me about a time you had to resolve a conflict between a metric-driven goal and user well-being.",
        "Describe a situation where a successful A/B test resulted in a negative long-term impact. What did you learn?",
        "Tell me about a time you used data to challenge a widely held assumption on your team."
      ],
      Design: [
        "Redesign the WhatsApp chat interface to better support users who use it for both personal and business communication.",
        "Design a reporting flow for Instagram that reduces false positives while ensuring user safety.",
        "Design an experience for discovering new communities in Facebook Groups."
      ]
    }
  },
  {
    id: "amazon",
    name: "Amazon",
    descriptor: "E-commerce, Prime, AWS, advertising, Alexa",
    context: "Amazon's flywheel is e-commerce + Prime + AWS. Key tensions: advertising as a 3rd revenue pillar, Prime value justification, AWS competition.",
    interviewCulture: "Heavily rooted in Leadership Principles (Customer Obsession, Dive Deep, Deliver Results). Behavioral questions explicitly test alignment with these principles.",
    roleContext: {
      APM: "Evaluated on data analysis, writing skills (PR/FAQ style), and bias for action. Focus on improving specific customer journeys.",
      PM: "Expected to own end-to-end features, write 6-pagers, and manage complex stakeholder environments. Strong focus on 'Dive Deep' and operational metrics.",
      SPM: "Tested on 'Think Big', launching new businesses, and driving P&L impact. Expect deep strategic questions and rigorous behavioral probing."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to improve the product discovery experience for users shopping for gifts on Amazon.",
        "How would you increase the adoption of Amazon Prime among college students?",
        "Design a new service for AWS that helps small businesses manage their cloud costs."
      ],
      Execution: [
        "The conversion rate on the Amazon checkout page dropped by 2%. Walk me through how you would 'Dive Deep' into this.",
        "Define the success metrics for a new Alexa feature that allows users to book restaurant reservations.",
        "How do you prioritize between launching a new feature in the US market vs. localizing an existing feature for a new international market?"
      ],
      Behavioral: [
        "Tell me about a time you showed Customer Obsession by advocating for a feature that didn't have immediate ROI.",
        "Describe a situation where you had to Deliver Results with very limited time and resources.",
        "Tell me about a time you Disagreed and Committed to a decision made by leadership."
      ],
      Design: [
        "Redesign the Amazon product detail page to reduce the number of returns.",
        "Design an interface for sellers to manage their advertising campaigns more effectively.",
        "Design a voice-only onboarding experience for a new Alexa device."
      ]
    }
  },
  {
    id: "stripe",
    name: "Stripe",
    descriptor: "Payments infrastructure, developer-first, global",
    context: "Stripe is the developer-first payments platform. Key tensions: enterprise vs startup product split, financial products (Capital), global expansion.",
    interviewCulture: "Values clear writing, systems thinking, and developer empathy. Interviews test ability to abstract complex financial concepts into simple APIs and user experiences.",
    roleContext: {
      APM: "Focus on understanding API design, basic financial concepts, and developer pain points. Evaluated on structured thinking and clarity of communication.",
      PM: "Expected to handle complex regulatory requirements, manage integrations with global financial networks, and drive adoption of new products.",
      SPM: "Tested on platform strategy, expanding the GDP of the internet, and managing the tension between self-serve startup tools and enterprise sales motions."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a product to help SaaS companies manage involuntary churn (failed payments).",
        "How would you improve the Stripe dashboard experience for non-technical business owners?",
        "Design a feature that allows marketplace platforms (like Uber) to handle complex split payments."
      ],
      Execution: [
        "The adoption rate of Stripe Radar (fraud prevention) has slowed down. How do you investigate?",
        "What metrics would you track to evaluate the success of Stripe Capital (lending)?",
        "How do you prioritize between adding support for a new local payment method vs. improving the latency of the core API?"
      ],
      Behavioral: [
        "Tell me about a time you had to build a product that required deep understanding of a complex, regulated domain.",
        "Describe a situation where you had to simplify a highly technical concept for a non-technical stakeholder.",
        "Tell me about a time you made a product decision that optimized for developer experience over short-term revenue."
      ],
      Design: [
        "Redesign the Stripe API documentation to make it easier for developers to find relevant code snippets.",
        "Design a checkout flow for a subscription business that maximizes conversion while remaining compliant with strong customer authentication (SCA).",
        "Design an interface for resolving payment disputes (chargebacks) that minimizes manual work for the merchant."
      ]
    }
  },
  {
    id: "notion",
    name: "Notion",
    descriptor: "Docs, wikis, databases, AI, collaboration",
    context: "Notion combines docs + databases. Key tensions: Notion AI monetization, enterprise vs personal use, template ecosystem, complexity vs simplicity.",
    interviewCulture: "Values craftsmanship, design sensibility, and 'tools for thought' philosophy. Interviews test your ability to balance immense flexibility with ease of use.",
    roleContext: {
      APM: "Evaluated on product taste, understanding of user workflows, and ability to design elegant solutions. Focus on the individual user experience.",
      PM: "Expected to drive team collaboration features, manage the transition from personal to enterprise use cases, and optimize onboarding.",
      SPM: "Tested on platform strategy (API/integrations), monetizing Notion AI, and positioning against specialized tools (Jira, Confluence)."
    },
    sampleQuestions: {
      "Product Sense": [
        "Design a feature to help new users overcome the 'blank page' anxiety when they first open Notion.",
        "How would you integrate Notion AI to improve the experience of managing a large database of tasks?",
        "Design a product solution to make Notion better for asynchronous team communication."
      ],
      Execution: [
        "The retention rate for users who sign up via a template has dropped. Diagnose the issue.",
        "Define the success metrics for launching a native calendar view in Notion.",
        "How do you prioritize between adding advanced database features for power users vs. simplifying the text editing experience for beginners?"
      ],
      Behavioral: [
        "Tell me about a time you had to balance building a flexible tool vs. an opinionated solution.",
        "Describe a situation where you had to advocate for design craftsmanship in the face of tight engineering deadlines.",
        "Tell me about a time you used community feedback to fundamentally alter your product roadmap."
      ],
      Design: [
        "Redesign the mobile app experience to make it easier to quickly capture notes on the go.",
        "Design an interface for managing permissions in a large enterprise workspace without creating administrative overhead.",
        "Design a feature that allows users to easily visualize the connections between different pages in their workspace."
      ]
    }
  }
];

// Merge base company data with intelligence layer
const defaultIntel = {
  region: "global" as const,
  dimensionWeights: { problemFraming: 3, userEmpathy: 3, prioritizationRationale: 3, metricDefinition: 3, tradeoffAwareness: 3 },
  interviewStructure: "Standard PM interview loop",
  hiringBarByRole: { APM: "Avg 2.5+", PM: "Avg 3.0+", SPM: "Avg 3.5+" },
  whatMakesThemDifferent: "",
};

export const companies: Company[] = baseCompanies.map((base) => ({
  ...base,
  ...defaultIntel,
  ...(companyIntelligence[base.id] ?? {}),
}));

export function getIndianCompanies(): Company[] {
  return companies.filter(c => c.region === "india");
}

export function getGlobalCompanies(): Company[] {
  return companies.filter(c => c.region === "global");
}

export function getCompanyById(id: string): Company | undefined {
  return companies.find(c => c.id === id || c.name === id);
}
