import type { AppLang } from '@/language/config'

export interface PrivacyPolicyListItem {
  label?: string
  text: string
}

export type PrivacyPolicyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; intro?: string; items: PrivacyPolicyListItem[] }
  | {
      type: 'contact'
      company: string
      emailLabel: string
      addressLabel: string
      address: string
    }

export interface PrivacyPolicySection {
  id: string
  nav: string
  title: string
  blocks: PrivacyPolicyBlock[]
}

export interface PrivacyPolicyContent {
  hero: {
    eyebrow: string
    title: string
    intro: string
    effectiveDate: string
  }
  onThisPage: string
  sections: PrivacyPolicySection[]
}

type LocalizedSection = Omit<PrivacyPolicySection, 'id'>

const sectionIds = [
  'who-we-are',
  'information-we-collect',
  'how-we-collect',
  'how-we-use',
  'identity-verification',
  'disclosure',
  'cookies',
  'international-transfers',
  'retention',
  'security',
  'rights',
  'marketing',
  'children',
  'third-parties',
  'changes',
  'contact',
] as const

function createPolicy(
  hero: PrivacyPolicyContent['hero'],
  onThisPage: string,
  sections: LocalizedSection[],
): PrivacyPolicyContent {
  if (sections.length !== sectionIds.length) {
    throw new Error(`Privacy Policy must contain ${sectionIds.length} sections`)
  }

  return {
    hero,
    onThisPage,
    sections: sections.map((section, index) => ({ ...section, id: sectionIds[index]! })),
  }
}

const registeredAddress = 'Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia'

const en = createPolicy(
  {
    eyebrow: 'Legal and privacy',
    title: 'Privacy Policy',
    intro: 'How KOS Markets Limited collects, uses, stores, and protects personal information.',
    effectiveDate: 'Effective 16 September 2026',
  },
  'On this page',
  [
    {
      nav: 'Scope',
      title: 'Who we are and the scope of this policy',
      blocks: [
        { type: 'paragraph', text: 'This Privacy Policy explains how KOS Markets Limited collects, uses, discloses, stores, and protects personal information when you visit www.kosmarkets.com, communicate with us, apply for or hold an account, use our client portal or trading-related services, or otherwise interact with us.' },
        { type: 'paragraph', text: 'In this policy, "KOS Markets", "we", "us", and "our" refer to KOS Markets Limited. KOS Markets Limited is incorporated in Saint Lucia with registration number 2026-00467 and has its registered address at Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia. KOS Markets Limited is responsible for personal information collected through the website, the client portal, and the related services covered by this policy.' },
        { type: 'paragraph', text: 'This policy does not replace any privacy notice provided for a specific product, service, promotion, or jurisdiction. If a specific notice conflicts with this policy, the specific notice applies to that processing.' },
      ],
    },
    {
      nav: 'Information we collect',
      title: 'Personal information we collect',
      blocks: [
        {
          type: 'list',
          intro: 'The personal information we collect depends on how you interact with us and may include:',
          items: [
            { label: 'Identity information', text: ', including your name, date of birth, nationality, signature, government-issued identification, photographs, and information needed to verify your identity.' },
            { label: 'Contact information', text: ', including your residential or postal address, email address, and telephone number.' },
            { label: 'Account and profile information', text: ', including login details, account identifiers, language, communication preferences, and client classification.' },
            { label: 'Financial and transaction information', text: ', including bank or payment details, deposits, withdrawals, balances, transaction history, source-of-funds information, and information about your financial circumstances where required.' },
            { label: 'Trading and service information', text: ', including trading-account activity, platform use, instructions, requests, complaints, and records relating to the services we provide.' },
            { label: 'Compliance information', text: ', including information used for identity verification, anti-money-laundering checks, sanctions screening, fraud prevention, suitability or appropriateness assessments, and regulatory reporting.' },
            { label: 'Communications', text: ', including emails, online-chat messages, telephone calls where recorded, support requests, survey responses, and other correspondence with us.' },
            { label: 'Technical and usage information', text: ', including your IP address, device and browser type, operating system, device identifiers, referring pages, pages viewed, access times, approximate location derived from your IP address, and security or diagnostic data.' },
            { label: 'Marketing information', text: ', including your preferences for receiving communications and information about your interaction with our messages or promotions.' },
          ],
        },
        { type: 'paragraph', text: 'Some information may be considered sensitive or subject to additional legal protection. We collect and use such information only where it is necessary, permitted by law, and, where required, with your consent.' },
      ],
    },
    {
      nav: 'How we collect it',
      title: 'How we collect personal information',
      blocks: [
        {
          type: 'list',
          intro: 'We collect personal information:',
          items: [
            { text: 'Directly from you when you visit the website, contact us, register, apply for an account, submit documents, use our services, participate in a promotion, or communicate with customer support.' },
            { text: 'Automatically when you use our website, client portal, or related technology, including through cookies, local storage, logs, and similar technologies.' },
            { text: 'From service providers, including Sumsub and providers of fraud-prevention, sanctions-screening, payment, banking, trading-platform, hosting, customer-support, and data services.' },
            { text: 'From public registers, regulatory authorities, law-enforcement bodies, credit or fraud-prevention databases, and other lawful sources where necessary for verification or compliance.' },
          ],
        },
        { type: 'paragraph', text: 'If you provide personal information about another person, you must have a lawful basis to do so and, where required, inform that person about this policy.' },
        { type: 'paragraph', text: 'You may choose not to provide requested information. However, we may be unable to open or maintain an account, process a transaction, respond to a request, or provide some services where the information is required by law, regulation, contract, security controls, or operational necessity.' },
      ],
    },
    {
      nav: 'How we use it',
      title: 'How and why we use personal information',
      blocks: [
        {
          type: 'list',
          intro: 'We may use personal information to:',
          items: [
            { text: 'Provide, administer, and support the website, client portal, accounts, transactions, and other services requested by you.' },
            { text: 'Verify your identity and assess whether we may provide services to you.' },
            { text: 'Perform anti-money-laundering, counter-terrorism financing, sanctions, fraud, and other compliance checks.' },
            { text: 'Process deposits, withdrawals, payments, account instructions, and service requests.' },
            { text: 'Communicate with you about your account, transactions, security, support requests, complaints, and changes to our services or legal terms.' },
            { text: 'Protect our clients, systems, staff, rights, and property, and investigate suspected fraud, misuse, security incidents, or unlawful activity.' },
            { text: 'Meet legal, regulatory, reporting, audit, tax, recordkeeping, and law-enforcement obligations.' },
            { text: 'Establish, exercise, or defend legal claims and resolve disputes.' },
            { text: 'Monitor, maintain, troubleshoot, and improve our website, systems, services, content, and client experience.' },
            { text: 'Conduct business planning, reporting, quality assurance, and statistical analysis using aggregated or de-identified information where reasonably possible.' },
            { text: 'Send marketing communications where permitted by law and in accordance with your preferences.' },
          ],
        },
        { type: 'paragraph', text: 'Depending on the applicable law, we rely on one or more of the following grounds: performance of a contract or steps requested before entering a contract; compliance with a legal or regulatory obligation; our legitimate interests or those of a third party; protection of a person\'s vital interests; and your consent. Where we rely on consent, you may withdraw it at any time, although withdrawal does not affect processing that occurred before it was withdrawn.' },
      ],
    },
    {
      nav: 'Identity verification',
      title: 'Identity verification and facial images',
      blocks: [
        { type: 'paragraph', text: 'We use Sumsub to perform identity-verification and related compliance checks. As part of this process, you may be asked to provide identity documents, photographs, video, or selfie images. Where facial verification is used, Sumsub may compare a facial image with the photograph in an identity document and perform a liveness check. Sumsub processes this information on our behalf and in accordance with its contractual and legal obligations.' },
        { type: 'paragraph', text: 'KOS Markets does not independently create or store biometric templates in its own systems. We receive and retain the verification result and the records needed to meet our compliance, fraud-prevention, security, dispute, and recordkeeping obligations. Where applicable law treats facial-verification information as biometric or sensitive information, any additional notice or consent required by law will be provided during the verification process.' },
      ],
    },
    {
      nav: 'Disclosure',
      title: 'When we disclose personal information',
      blocks: [
        {
          type: 'list',
          intro: 'We may disclose personal information to:',
          items: [
            { text: 'Identity-verification, anti-money-laundering, sanctions-screening, fraud-prevention, and risk-management providers, including Sumsub.' },
            { text: 'Banks, payment processors, payment-service providers, custodians, and other parties involved in deposits, withdrawals, or transactions.' },
            { text: 'Trading-platform, market-data, liquidity, technology, telecommunications, hosting, cloud, cybersecurity, website, analytics, customer-support, and communications providers, including the provider of our online-chat service.' },
            { text: 'Professional advisers and auditors, including legal, accounting, compliance, insurance, and consulting providers.' },
            { text: 'Regulators, courts, law-enforcement bodies, tax authorities, dispute-resolution bodies, and other public authorities where disclosure is required or permitted by law.' },
            { text: 'A buyer, investor, lender, adviser, or successor in connection with a proposed or completed merger, reorganisation, financing, sale, or transfer of all or part of our business or assets, subject to appropriate confidentiality safeguards.' },
            { text: 'Other persons where you direct us or give consent, or where disclosure is otherwise authorised by law.' },
          ],
        },
        { type: 'paragraph', text: 'We require service providers to protect personal information and use it only for the services they provide to us or as otherwise permitted by law. We do not sell personal information for money. If an applicable law gives a broader meaning to "sale" or "sharing", we will provide the notices and choices required by that law.' },
      ],
    },
    {
      nav: 'Cookies',
      title: 'Cookies and similar technologies',
      blocks: [
        { type: 'paragraph', text: 'Our website uses cookies, local storage, scripts, and similar technologies to operate the website, remember language and display preferences, maintain security, provide online chat, understand website use, diagnose problems, and improve performance. Some technologies are provided by third parties and may allow those parties to receive technical and usage information.' },
        { type: 'paragraph', text: 'Where required by law, non-essential technologies will be used only after you provide consent. You can change your choices through our cookie controls, where available, or through your browser settings. Blocking some technologies may prevent parts of the website or services from working correctly.' },
        { type: 'paragraph', text: 'Further information about the technologies we use, their providers, purposes, and duration may be provided in a separate Cookie Policy.' },
      ],
    },
    {
      nav: 'International transfers',
      title: 'Data location and international transfers',
      blocks: [
        { type: 'paragraph', text: 'Our primary customer relationship management system and the customer records held in that system are hosted in Singapore. Because our clients and service providers operate internationally, personal information may also be accessed from, or processed in, countries other than the country in which you live. Those countries may have different data-protection laws.' },
        { type: 'paragraph', text: 'Where required, we use contractual protections, transfer mechanisms, access controls, and other safeguards designed to protect personal information transferred internationally. You may contact us for further information about the safeguards relevant to your personal information.' },
      ],
    },
    {
      nav: 'Retention',
      title: 'How long we retain personal information',
      blocks: [
        { type: 'paragraph', text: 'We retain account, identity-verification, transaction, and related compliance information while your account remains open. We review and refresh KYC information at least once every 12 months and may review it more frequently where required by risk, law, regulation, or a change in your circumstances.' },
        { type: 'paragraph', text: 'After an account is closed, we retain the related personal information for 12 months. If applicable law, a regulatory requirement, a legal claim, a dispute, an audit, or an official investigation requires a longer period, we retain the relevant information for that longer period. This legal-retention requirement takes priority over the 12-month period.' },
        { type: 'paragraph', text: 'When information is no longer required, we delete it, anonymise it, or securely isolate it until deletion is possible.' },
      ],
    },
    {
      nav: 'Security',
      title: 'How we protect personal information',
      blocks: [
        { type: 'paragraph', text: 'We use administrative, technical, and physical safeguards designed to protect personal information against accidental or unlawful loss, misuse, unauthorised access, alteration, disclosure, or destruction. These safeguards may include access controls, encryption where appropriate, system monitoring, security testing, staff confidentiality requirements, and service-provider controls.' },
        { type: 'paragraph', text: 'No website, transmission, or storage system is completely secure. You should protect your login credentials, use secure devices and networks, and contact us promptly if you suspect unauthorised access to your account or personal information.' },
      ],
    },
    {
      nav: 'Your rights',
      title: 'Your privacy rights',
      blocks: [
        {
          type: 'list',
          intro: 'Depending on where you live and the law that applies, you may have the right to:',
          items: [
            { text: 'Ask whether we process your personal information and request access to it.' },
            { text: 'Ask us to correct inaccurate or incomplete information.' },
            { text: 'Ask us to delete information in certain circumstances.' },
            { text: 'Ask us to restrict processing or object to particular processing.' },
            { text: 'Receive certain information in a portable format.' },
            { text: 'Withdraw consent where processing is based on consent.' },
            { text: 'Opt out of direct marketing.' },
            { text: 'Ask for information about international transfers or automated decision-making, where applicable.' },
            { text: 'Make a complaint to us or to the relevant privacy or data-protection authority.' },
          ],
        },
        { type: 'paragraph', text: 'These rights are not absolute. For example, we may need to retain information to comply with financial-services, anti-money-laundering, tax, regulatory, dispute, or legal obligations. We may ask you to verify your identity before acting on a request. We will respond within the period required by applicable law and will explain any lawful reason for refusing or limiting a request.' },
        { type: 'paragraph', text: 'To exercise a privacy right, contact us using the details in section 16 and include "Privacy Request" in the subject line. Please do not send passwords or unnecessary identity documents by ordinary email.' },
      ],
    },
    {
      nav: 'Marketing',
      title: 'Marketing communications',
      blocks: [
        { type: 'paragraph', text: 'We may send information about our products, services, events, or promotions where permitted by law. You may opt out by using the unsubscribe option in a marketing message or by contacting us. We may still send service, account, transaction, security, legal, or regulatory communications that are necessary for our relationship with you.' },
      ],
    },
    {
      nav: 'Children',
      title: 'Children',
      blocks: [
        { type: 'paragraph', text: 'Our website and services are not directed to persons under 18, and we do not knowingly open accounts for them. If you believe that a person under 18 has provided personal information to us, contact us so that we can investigate and take appropriate action.' },
      ],
    },
    {
      nav: 'Third parties',
      title: 'Third-party websites and services',
      blocks: [
        { type: 'paragraph', text: 'Our website may contain links to, or embedded content and services from, third parties. Those third parties may collect personal information under their own privacy notices. We are not responsible for their privacy practices, and we encourage you to read their notices before providing information or using their services.' },
      ],
    },
    {
      nav: 'Policy changes',
      title: 'Changes to this policy',
      blocks: [
        { type: 'paragraph', text: 'We may update this Privacy Policy to reflect changes in our practices, services, or legal obligations. We will publish the revised policy on this page and update the effective date. Where required by law, we will provide additional notice or request consent before a material change takes effect.' },
      ],
    },
    {
      nav: 'Contact',
      title: 'Contact and complaints',
      blocks: [
        { type: 'paragraph', text: 'Questions, privacy requests, and complaints may be sent to:' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: 'Email', addressLabel: 'Registered address', address: registeredAddress },
        { type: 'paragraph', text: 'Please use the subject line "Privacy Request" or "Privacy Complaint". Include enough information for us to understand your request, but do not send passwords or unnecessary identity documents by ordinary email.' },
        { type: 'paragraph', text: 'We will acknowledge and investigate privacy complaints and respond within the period required by applicable law. If you are not satisfied with our response, you may have the right to complain to the privacy or data-protection authority in your jurisdiction.' },
      ],
    },
  ],
)

const cn = createPolicy(
  {
    eyebrow: '法律与隐私',
    title: '隐私政策',
    intro: '说明 KOS Markets Limited 如何收集、使用、存储和保护个人信息。',
    effectiveDate: '生效日期：2026年9月16日',
  },
  '本页内容',
  [
    {
      nav: '适用范围',
      title: '我们的身份及本政策的适用范围',
      blocks: [
        { type: 'paragraph', text: '本隐私政策说明您访问 www.kosmarkets.com、与我们沟通、申请或持有账户、使用我们的客户门户或交易相关服务，或以其他方式与我们互动时，KOS Markets Limited 如何收集、使用、披露、存储和保护个人信息。' },
        { type: 'paragraph', text: '本政策中的“KOS Markets”“我们”及“我们的”均指 KOS Markets Limited。KOS Markets Limited 在圣卢西亚注册成立，注册号为 2026-00467，注册地址为 Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia。KOS Markets Limited 负责处理通过网站、客户门户及本政策所涵盖的相关服务收集的个人信息。' },
        { type: 'paragraph', text: '本政策不会取代针对特定产品、服务、推广活动或司法管辖区提供的任何隐私通知。如果特定通知与本政策存在冲突，则该特定通知适用于相关处理活动。' },
      ],
    },
    {
      nav: '我们收集的信息',
      title: '我们收集的个人信息',
      blocks: [
        {
          type: 'list',
          intro: '我们收集的个人信息取决于您与我们互动的方式，可能包括：',
          items: [
            { label: '身份信息', text: '，包括姓名、出生日期、国籍、签名、政府签发的身份证明、照片及验证您身份所需的信息。' },
            { label: '联系信息', text: '，包括居住地址或邮寄地址、电子邮箱地址和电话号码。' },
            { label: '账户及个人资料信息', text: '，包括登录信息、账户标识符、语言、沟通偏好和客户分类。' },
            { label: '财务及交易信息', text: '，包括银行或付款信息、存款、提款、余额、交易历史、资金来源信息，以及在需要时收集的财务状况信息。' },
            { label: '交易及服务信息', text: '，包括交易账户活动、平台使用情况、指示、请求、投诉以及与我们所提供服务有关的记录。' },
            { label: '合规信息', text: '，包括用于身份验证、反洗钱检查、制裁筛查、防欺诈、适合性或恰当性评估及监管报告的信息。' },
            { label: '通信信息', text: '，包括电子邮件、在线聊天消息、在适用情况下录音的电话、支持请求、调查回复及与我们的其他往来。' },
            { label: '技术及使用信息', text: '，包括 IP 地址、设备及浏览器类型、操作系统、设备标识符、来源页面、浏览页面、访问时间、根据 IP 地址推断的大致位置，以及安全或诊断数据。' },
            { label: '营销信息', text: '，包括您接收通信的偏好，以及您与我们的消息或推广活动互动的信息。' },
          ],
        },
        { type: 'paragraph', text: '部分信息可能被视为敏感信息或受到额外法律保护。我们仅在必要、法律允许且在需要时获得您同意的情况下收集和使用此类信息。' },
      ],
    },
    {
      nav: '信息收集方式',
      title: '我们如何收集个人信息',
      blocks: [
        {
          type: 'list',
          intro: '我们通过以下方式收集个人信息：',
          items: [
            { text: '您访问网站、联系我们、注册、申请账户、提交文件、使用我们的服务、参与推广活动或与客户支持沟通时，由您直接提供。' },
            { text: '您使用我们的网站、客户门户或相关技术时，通过 Cookie、本地存储、日志及类似技术自动收集。' },
            { text: '从服务提供商处收集，包括 Sumsub，以及防欺诈、制裁筛查、付款、银行、交易平台、托管、客户支持和数据服务提供商。' },
            { text: '在身份验证或合规所需的情况下，从公共登记册、监管机构、执法机构、信用或防欺诈数据库及其他合法来源收集。' },
          ],
        },
        { type: 'paragraph', text: '如果您向我们提供他人的个人信息，您必须具有合法依据，并在需要时将本政策告知该人士。' },
        { type: 'paragraph', text: '您可以选择不提供所要求的信息。但是，如果法律、法规、合同、安全控制或运营需要该等信息，我们可能无法开立或维持账户、处理交易、回应请求或提供某些服务。' },
      ],
    },
    {
      nav: '信息使用方式',
      title: '我们如何及为何使用个人信息',
      blocks: [
        {
          type: 'list',
          intro: '我们可能将个人信息用于：',
          items: [
            { text: '提供、管理及支持网站、客户门户、账户、交易及您要求的其他服务。' },
            { text: '验证您的身份，并评估我们是否可以向您提供服务。' },
            { text: '进行反洗钱、反恐怖融资、制裁、防欺诈及其他合规检查。' },
            { text: '处理存款、提款、付款、账户指示及服务请求。' },
            { text: '就您的账户、交易、安全、支持请求、投诉以及我们的服务或法律条款变更与您沟通。' },
            { text: '保护我们的客户、系统、员工、权利和财产，并调查涉嫌欺诈、滥用、安全事件或违法活动。' },
            { text: '履行法律、监管、报告、审计、税务、记录保存及执法义务。' },
            { text: '确立、行使或抗辩法律权利，并解决争议。' },
            { text: '监控、维护、排除故障并改进我们的网站、系统、服务、内容和客户体验。' },
            { text: '在合理可行的情况下，使用汇总或去标识化信息进行业务规划、报告、质量保证和统计分析。' },
            { text: '在法律允许并符合您偏好的情况下发送营销通信。' },
          ],
        },
        { type: 'paragraph', text: '根据适用法律，我们依赖以下一项或多项法律依据：履行合同或在订立合同前应您的要求采取步骤；遵守法律或监管义务；我们或第三方的合法利益；保护个人的重要利益；以及您的同意。当我们依据同意进行处理时，您可随时撤回同意，但撤回不会影响撤回前已经进行的处理。' },
      ],
    },
    {
      nav: '身份验证',
      title: '身份验证及面部图像',
      blocks: [
        { type: 'paragraph', text: '我们使用 Sumsub 进行身份验证及相关合规检查。在此过程中，您可能需要提供身份证件、照片、视频或自拍图像。使用面部验证时，Sumsub 可能会将面部图像与身份证件上的照片进行比对，并进行活体检测。Sumsub 代表我们处理这些信息，并遵守其合同及法律义务。' },
        { type: 'paragraph', text: 'KOS Markets 不会在自身系统中独立创建或存储生物识别模板。我们会接收并保留验证结果，以及履行合规、防欺诈、安全、争议处理和记录保存义务所需的记录。如果适用法律将面部验证信息视为生物识别或敏感信息，我们将在验证过程中提供法律要求的任何额外通知或征求同意。' },
      ],
    },
    {
      nav: '信息披露',
      title: '我们何时披露个人信息',
      blocks: [
        {
          type: 'list',
          intro: '我们可能向以下各方披露个人信息：',
          items: [
            { text: '身份验证、反洗钱、制裁筛查、防欺诈和风险管理服务提供商，包括 Sumsub。' },
            { text: '银行、付款处理商、支付服务提供商、托管机构，以及参与存款、提款或交易的其他各方。' },
            { text: '交易平台、市场数据、流动性、技术、电信、托管、云服务、网络安全、网站、分析、客户支持和通信服务提供商，包括我们的在线聊天服务提供商。' },
            { text: '专业顾问和审计师，包括法律、会计、合规、保险和咨询服务提供商。' },
            { text: '在法律要求或允许披露的情况下，向监管机构、法院、执法机构、税务机关、争议解决机构及其他公共机构披露。' },
            { text: '在拟议或已经完成的合并、重组、融资、出售或转让全部或部分业务或资产时，向买方、投资者、贷款人、顾问或继受方披露，但须采取适当的保密保障措施。' },
            { text: '在您指示或同意的情况下，或法律另有授权的情况下，向其他人士披露。' },
          ],
        },
        { type: 'paragraph', text: '我们要求服务提供商保护个人信息，并仅将其用于向我们提供的服务或法律另行允许的用途。我们不会以金钱为对价出售个人信息。如果适用法律对“出售”或“共享”有更广泛的定义，我们将提供该法律要求的通知和选择。' },
      ],
    },
    {
      nav: 'Cookie',
      title: 'Cookie 及类似技术',
      blocks: [
        { type: 'paragraph', text: '我们的网站使用 Cookie、本地存储、脚本及类似技术来运营网站、记住语言和显示偏好、维护安全、提供在线聊天、了解网站使用情况、诊断问题并提升性能。部分技术由第三方提供，可能使该等第三方接收技术及使用信息。' },
        { type: 'paragraph', text: '在法律要求的情况下，只有在您同意后才会使用非必要技术。您可通过我们的 Cookie 控件（如有）或浏览器设置更改选择。阻止部分技术可能导致网站或服务的某些部分无法正常运行。' },
        { type: 'paragraph', text: '有关我们所使用技术、提供商、用途及持续时间的更多信息，可能会在单独的 Cookie 政策中提供。' },
      ],
    },
    {
      nav: '跨境传输',
      title: '数据存储地点及跨境传输',
      blocks: [
        { type: 'paragraph', text: '我们的主要客户关系管理系统及其中保存的客户记录托管在新加坡。由于我们的客户和服务提供商在全球运营，个人信息也可能在您居住国以外的国家被访问或处理，而这些国家的数据保护法律可能有所不同。' },
        { type: 'paragraph', text: '在需要时，我们会采用合同保护、传输机制、访问控制及其他旨在保护跨境传输个人信息的保障措施。您可以联系我们，进一步了解与您的个人信息有关的保障措施。' },
      ],
    },
    {
      nav: '保留期限',
      title: '我们保留个人信息的期限',
      blocks: [
        { type: 'paragraph', text: '在您的账户保持开立期间，我们会保留账户、身份验证、交易及相关合规信息。我们至少每 12 个月审查并更新一次 KYC 信息；如风险、法律、法规或您的情况变化要求，也可能更频繁地审查。' },
        { type: 'paragraph', text: '账户关闭后，我们会将相关个人信息保留 12 个月。如果适用法律、监管要求、法律索赔、争议、审计或正式调查要求更长的期限，我们将在该更长期限内保留相关信息。此法律保留要求优先于上述 12 个月期限。' },
        { type: 'paragraph', text: '当信息不再需要时，我们会将其删除、匿名化，或在能够删除前进行安全隔离。' },
      ],
    },
    {
      nav: '安全措施',
      title: '我们如何保护个人信息',
      blocks: [
        { type: 'paragraph', text: '我们采用管理、技术和物理保障措施，旨在防止个人信息意外或非法丢失、滥用、未经授权访问、更改、披露或销毁。这些措施可能包括访问控制、适当情况下的加密、系统监控、安全测试、员工保密要求和服务提供商控制。' },
        { type: 'paragraph', text: '任何网站、传输或存储系统都无法做到绝对安全。您应保护登录凭据、使用安全的设备和网络；如果怀疑账户或个人信息遭到未经授权访问，请立即联系我们。' },
      ],
    },
    {
      nav: '您的权利',
      title: '您的隐私权利',
      blocks: [
        {
          type: 'list',
          intro: '根据您的居住地和适用法律，您可能有权：',
          items: [
            { text: '询问我们是否处理您的个人信息并请求访问。' },
            { text: '要求我们更正不准确或不完整的信息。' },
            { text: '在特定情况下要求我们删除信息。' },
            { text: '要求我们限制处理或反对特定处理。' },
            { text: '以可移植格式接收某些信息。' },
            { text: '在处理基于同意时撤回同意。' },
            { text: '选择不接收直接营销。' },
            { text: '在适用时索取跨境传输或自动化决策方面的信息。' },
            { text: '向我们或相关隐私或数据保护机构提出投诉。' },
          ],
        },
        { type: 'paragraph', text: '这些权利并非绝对。例如，为遵守金融服务、反洗钱、税务、监管、争议或法律义务，我们可能需要保留信息。在处理请求前，我们可能会要求您验证身份。我们会在适用法律规定的期限内回应，并说明拒绝或限制请求的任何合法理由。' },
        { type: 'paragraph', text: '如需行使隐私权利，请使用第 16 节所列方式联系我们，并在主题栏注明“Privacy Request（隐私请求）”。请勿通过普通电子邮件发送密码或不必要的身份证件。' },
      ],
    },
    {
      nav: '营销通信',
      title: '营销通信',
      blocks: [
        { type: 'paragraph', text: '在法律允许的情况下，我们可能向您发送有关产品、服务、活动或推广的信息。您可以使用营销信息中的退订选项或联系我们来选择退出。我们仍可能发送维持与您关系所必需的服务、账户、交易、安全、法律或监管通信。' },
      ],
    },
    {
      nav: '未成年人',
      title: '未成年人',
      blocks: [
        { type: 'paragraph', text: '我们的网站和服务并非面向 18 岁以下人士，我们也不会在知情的情况下为其开立账户。如果您认为有 18 岁以下人士向我们提供了个人信息，请联系我们，以便我们调查并采取适当措施。' },
      ],
    },
    {
      nav: '第三方',
      title: '第三方网站及服务',
      blocks: [
        { type: 'paragraph', text: '我们的网站可能包含第三方链接，或嵌入第三方内容和服务。该等第三方可能根据其自身隐私通知收集个人信息。我们不对其隐私做法负责，建议您在提供信息或使用其服务前阅读相关通知。' },
      ],
    },
    {
      nav: '政策变更',
      title: '本政策的变更',
      blocks: [
        { type: 'paragraph', text: '我们可能会更新本隐私政策，以反映我们的做法、服务或法律义务的变化。我们会在本页面发布修订后的政策并更新生效日期。在法律要求的情况下，我们会在重大变更生效前提供额外通知或征求同意。' },
      ],
    },
    {
      nav: '联系我们',
      title: '联系及投诉',
      blocks: [
        { type: 'paragraph', text: '有关问题、隐私请求及投诉可发送至：' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: '电子邮箱', addressLabel: '注册地址', address: registeredAddress },
        { type: 'paragraph', text: '请在主题栏注明“Privacy Request（隐私请求）”或“Privacy Complaint（隐私投诉）”。请提供足够的信息以便我们理解您的请求，但不要通过普通电子邮件发送密码或不必要的身份证件。' },
        { type: 'paragraph', text: '我们会确认收到并调查隐私投诉，并在适用法律规定的期限内作出回应。如果您对我们的回应不满意，您可能有权向您所在司法管辖区的隐私或数据保护机构投诉。' },
      ],
    },
  ],
)

const tw = createPolicy(
  {
    eyebrow: '法律與私隱',
    title: '私隱政策',
    intro: '說明 KOS Markets Limited 如何收集、使用、儲存及保護個人資料。',
    effectiveDate: '生效日期：2026年9月16日',
  },
  '本頁內容',
  [
    {
      nav: '適用範圍',
      title: '我們的身份及本政策的適用範圍',
      blocks: [
        { type: 'paragraph', text: '本私隱政策說明您瀏覽 www.kosmarkets.com、與我們聯絡、申請或持有帳戶、使用我們的客戶平台或交易相關服務，或以其他方式與我們互動時，KOS Markets Limited 如何收集、使用、披露、儲存及保護個人資料。' },
        { type: 'paragraph', text: '本政策中的「KOS Markets」、「我們」及「我們的」均指 KOS Markets Limited。KOS Markets Limited 於聖盧西亞註冊成立，註冊編號為 2026-00467，註冊地址為 Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia。KOS Markets Limited 負責處理透過網站、客戶平台及本政策所涵蓋的相關服務收集的個人資料。' },
        { type: 'paragraph', text: '本政策不會取代針對特定產品、服務、推廣活動或司法管轄區提供的任何私隱通知。如特定通知與本政策有衝突，則該特定通知適用於相關處理活動。' },
      ],
    },
    {
      nav: '我們收集的資料',
      title: '我們收集的個人資料',
      blocks: [
        {
          type: 'list',
          intro: '我們收集的個人資料取決於您與我們互動的方式，可能包括：',
          items: [
            { label: '身份資料', text: '，包括姓名、出生日期、國籍、簽名、政府簽發的身份證明文件、照片及驗證您身份所需的資料。' },
            { label: '聯絡資料', text: '，包括居住或郵寄地址、電郵地址及電話號碼。' },
            { label: '帳戶及個人檔案資料', text: '，包括登入資料、帳戶識別碼、語言、通訊偏好及客戶分類。' },
            { label: '財務及交易資料', text: '，包括銀行或付款資料、存款、提款、結餘、交易記錄、資金來源資料，以及在需要時收集的財務狀況資料。' },
            { label: '交易及服務資料', text: '，包括交易帳戶活動、平台使用情況、指示、要求、投訴及與我們所提供服務有關的記錄。' },
            { label: '合規資料', text: '，包括用於身份驗證、反洗錢審查、制裁篩查、防詐騙、合適性或適當性評估及監管報告的資料。' },
            { label: '通訊資料', text: '，包括電郵、網上聊天訊息、在適用情況下錄音的電話、支援要求、調查回覆及與我們的其他通訊。' },
            { label: '技術及使用資料', text: '，包括 IP 地址、裝置及瀏覽器類型、操作系統、裝置識別碼、來源頁面、瀏覽頁面、存取時間、由 IP 地址推斷的大概位置，以及安全或診斷資料。' },
            { label: '市場推廣資料', text: '，包括您接收通訊的偏好，以及您與我們的訊息或推廣活動互動的資料。' },
          ],
        },
        { type: 'paragraph', text: '部分資料可能被視為敏感資料或受額外法律保障。我們只會在必要、法律允許且在需要時獲得您同意的情況下收集及使用此類資料。' },
      ],
    },
    {
      nav: '資料收集方式',
      title: '我們如何收集個人資料',
      blocks: [
        {
          type: 'list',
          intro: '我們透過以下方式收集個人資料：',
          items: [
            { text: '您瀏覽網站、聯絡我們、註冊、申請帳戶、提交文件、使用我們的服務、參與推廣活動或與客戶支援溝通時，由您直接提供。' },
            { text: '您使用我們的網站、客戶平台或相關技術時，透過 Cookie、本機儲存、日誌及類似技術自動收集。' },
            { text: '從服務供應商收集，包括 Sumsub，以及防詐騙、制裁篩查、付款、銀行、交易平台、託管、客戶支援及數據服務供應商。' },
            { text: '在身份驗證或合規所需的情況下，從公共登記冊、監管機構、執法機構、信貸或防詐騙資料庫及其他合法來源收集。' },
          ],
        },
        { type: 'paragraph', text: '如您向我們提供他人的個人資料，您必須具有合法依據，並在需要時將本政策告知該人士。' },
        { type: 'paragraph', text: '您可選擇不提供所要求的資料。然而，如法律、法規、合約、安全控制或營運需要該等資料，我們可能無法開立或維持帳戶、處理交易、回應要求或提供部分服務。' },
      ],
    },
    {
      nav: '資料使用方式',
      title: '我們如何及為何使用個人資料',
      blocks: [
        {
          type: 'list',
          intro: '我們可能將個人資料用於：',
          items: [
            { text: '提供、管理及支援網站、客戶平台、帳戶、交易及您要求的其他服務。' },
            { text: '驗證您的身份，並評估我們是否可向您提供服務。' },
            { text: '進行反洗錢、反恐怖分子資金籌集、制裁、防詐騙及其他合規審查。' },
            { text: '處理存款、提款、付款、帳戶指示及服務要求。' },
            { text: '就您的帳戶、交易、安全、支援要求、投訴，以及我們的服務或法律條款變更與您溝通。' },
            { text: '保護我們的客戶、系統、員工、權利及財產，並調查涉嫌詐騙、濫用、安全事故或違法活動。' },
            { text: '履行法律、監管、報告、審計、稅務、記錄保存及執法責任。' },
            { text: '確立、行使或抗辯法律申索，並解決爭議。' },
            { text: '監察、維護、排除故障及改善我們的網站、系統、服務、內容及客戶體驗。' },
            { text: '在合理可行情況下，使用匯總或去識別化資料進行業務規劃、報告、品質保證及統計分析。' },
            { text: '在法律允許並符合您偏好的情況下發送市場推廣通訊。' },
          ],
        },
        { type: 'paragraph', text: '根據適用法律，我們依賴以下一項或多項法律依據：履行合約或在訂立合約前應您的要求採取步驟；遵守法律或監管責任；我們或第三方的合法利益；保障個人的重大利益；以及您的同意。當我們依據同意進行處理時，您可隨時撤回同意，但撤回不會影響撤回前已進行的處理。' },
      ],
    },
    {
      nav: '身份驗證',
      title: '身份驗證及面部圖像',
      blocks: [
        { type: 'paragraph', text: '我們使用 Sumsub 進行身份驗證及相關合規審查。在此過程中，您可能需要提供身份證明文件、照片、影片或自拍圖像。使用面部驗證時，Sumsub 可能會將面部圖像與身份證明文件上的照片進行比對，並進行活體檢測。Sumsub 代表我們處理這些資料，並遵守其合約及法律責任。' },
        { type: 'paragraph', text: 'KOS Markets 不會在自身系統中獨立建立或儲存生物識別範本。我們會接收及保留驗證結果，以及履行合規、防詐騙、安全、爭議處理及記錄保存責任所需的記錄。如適用法律將面部驗證資料視為生物識別或敏感資料，我們會在驗證過程中提供法律要求的任何額外通知或徵求同意。' },
      ],
    },
    {
      nav: '資料披露',
      title: '我們何時披露個人資料',
      blocks: [
        {
          type: 'list',
          intro: '我們可能向以下各方披露個人資料：',
          items: [
            { text: '身份驗證、反洗錢、制裁篩查、防詐騙及風險管理服務供應商，包括 Sumsub。' },
            { text: '銀行、付款處理商、支付服務供應商、託管機構，以及參與存款、提款或交易的其他各方。' },
            { text: '交易平台、市場數據、流動性、技術、電訊、託管、雲端服務、網絡安全、網站、分析、客戶支援及通訊服務供應商，包括我們的網上聊天服務供應商。' },
            { text: '專業顧問及核數師，包括法律、會計、合規、保險及顧問服務供應商。' },
            { text: '在法律要求或允許披露的情況下，向監管機構、法院、執法機構、稅務機關、爭議解決機構及其他公共機構披露。' },
            { text: '在擬議或已完成的合併、重組、融資、出售或轉讓全部或部分業務或資產時，向買方、投資者、貸款人、顧問或承繼人披露，但須採取適當的保密保障措施。' },
            { text: '在您指示或同意的情況下，或法律另有授權的情況下，向其他人士披露。' },
          ],
        },
        { type: 'paragraph', text: '我們要求服務供應商保護個人資料，並僅將其用於向我們提供的服務或法律另行允許的用途。我們不會以金錢為代價出售個人資料。如適用法律對「出售」或「共享」有更廣泛的定義，我們會提供該法律要求的通知及選擇。' },
      ],
    },
    {
      nav: 'Cookie',
      title: 'Cookie 及類似技術',
      blocks: [
        { type: 'paragraph', text: '我們的網站使用 Cookie、本機儲存、指令碼及類似技術來營運網站、記住語言及顯示偏好、維護安全、提供網上聊天、了解網站使用情況、診斷問題及改善效能。部分技術由第三方提供，可能使該等第三方接收技術及使用資料。' },
        { type: 'paragraph', text: '在法律要求的情況下，只有在您同意後才會使用非必要技術。您可透過我們的 Cookie 控制項（如有）或瀏覽器設定更改選擇。封鎖部分技術可能導致網站或服務的某些部分無法正常運作。' },
        { type: 'paragraph', text: '有關我們所使用技術、供應商、用途及持續時間的更多資料，可能會在獨立的 Cookie 政策中提供。' },
      ],
    },
    {
      nav: '跨境傳輸',
      title: '資料儲存地點及跨境傳輸',
      blocks: [
        { type: 'paragraph', text: '我們的主要客戶關係管理系統及其中保存的客戶記錄託管於新加坡。由於我們的客戶及服務供應商在全球營運，個人資料亦可能在您居住國以外的國家被存取或處理，而這些國家的資料保障法律可能有所不同。' },
        { type: 'paragraph', text: '在需要時，我們會採用合約保障、傳輸機制、存取控制及其他旨在保護跨境傳輸個人資料的保障措施。您可聯絡我們，進一步了解與您的個人資料有關的保障措施。' },
      ],
    },
    {
      nav: '保留期限',
      title: '我們保留個人資料的期限',
      blocks: [
        { type: 'paragraph', text: '在您的帳戶維持開立期間，我們會保留帳戶、身份驗證、交易及相關合規資料。我們至少每 12 個月審查及更新一次 KYC 資料；如風險、法律、法規或您的情況變化有所要求，亦可能更頻密地審查。' },
        { type: 'paragraph', text: '帳戶關閉後，我們會將相關個人資料保留 12 個月。如適用法律、監管要求、法律申索、爭議、審計或正式調查要求更長期限，我們會在該更長期限內保留相關資料。此法律保留要求優先於上述 12 個月期限。' },
        { type: 'paragraph', text: '當資料不再需要時，我們會將其刪除、匿名化，或在能夠刪除前進行安全隔離。' },
      ],
    },
    {
      nav: '安全措施',
      title: '我們如何保護個人資料',
      blocks: [
        { type: 'paragraph', text: '我們採用行政、技術及實體保障措施，旨在防止個人資料意外或非法遺失、濫用、未經授權存取、更改、披露或銷毀。這些措施可能包括存取控制、適當情況下的加密、系統監察、安全測試、員工保密要求及服務供應商控制。' },
        { type: 'paragraph', text: '任何網站、傳輸或儲存系統均無法做到絕對安全。您應保護登入憑證、使用安全的裝置及網絡；如懷疑帳戶或個人資料遭未經授權存取，請立即聯絡我們。' },
      ],
    },
    {
      nav: '您的權利',
      title: '您的私隱權利',
      blocks: [
        {
          type: 'list',
          intro: '根據您的居住地及適用法律，您可能有權：',
          items: [
            { text: '查詢我們是否處理您的個人資料並要求存取。' },
            { text: '要求我們更正不準確或不完整的資料。' },
            { text: '在特定情況下要求我們刪除資料。' },
            { text: '要求我們限制處理或反對特定處理。' },
            { text: '以可攜格式接收某些資料。' },
            { text: '在處理基於同意時撤回同意。' },
            { text: '選擇不接收直接市場推廣。' },
            { text: '在適用時索取跨境傳輸或自動化決策方面的資料。' },
            { text: '向我們或相關私隱或資料保障機構提出投訴。' },
          ],
        },
        { type: 'paragraph', text: '這些權利並非絕對。例如，為遵守金融服務、反洗錢、稅務、監管、爭議或法律責任，我們可能需要保留資料。在處理要求前，我們可能會要求您驗證身份。我們會在適用法律規定的期限內回應，並說明拒絕或限制要求的任何合法理由。' },
        { type: 'paragraph', text: '如需行使私隱權利，請使用第 16 節所列方式聯絡我們，並在主旨欄註明「Privacy Request（私隱要求）」。請勿透過普通電郵發送密碼或不必要的身份證明文件。' },
      ],
    },
    {
      nav: '市場推廣',
      title: '市場推廣通訊',
      blocks: [
        { type: 'paragraph', text: '在法律允許的情況下，我們可能向您發送有關產品、服務、活動或推廣的資料。您可使用推廣訊息中的取消訂閱選項或聯絡我們選擇退出。我們仍可能發送維持與您關係所必需的服務、帳戶、交易、安全、法律或監管通訊。' },
      ],
    },
    {
      nav: '未成年人',
      title: '未成年人',
      blocks: [
        { type: 'paragraph', text: '我們的網站及服務並非面向 18 歲以下人士，我們亦不會在知情情況下為其開立帳戶。如您認為有 18 歲以下人士向我們提供了個人資料，請聯絡我們，以便我們調查並採取適當行動。' },
      ],
    },
    {
      nav: '第三方',
      title: '第三方網站及服務',
      blocks: [
        { type: 'paragraph', text: '我們的網站可能包含第三方連結，或嵌入第三方內容及服務。該等第三方可能根據其自身私隱通知收集個人資料。我們不對其私隱做法負責，建議您在提供資料或使用其服務前閱讀相關通知。' },
      ],
    },
    {
      nav: '政策變更',
      title: '本政策的變更',
      blocks: [
        { type: 'paragraph', text: '我們可能會更新本私隱政策，以反映我們的做法、服務或法律責任的變化。我們會在本頁發布修訂後的政策並更新生效日期。在法律要求的情況下，我們會在重大變更生效前提供額外通知或徵求同意。' },
      ],
    },
    {
      nav: '聯絡我們',
      title: '聯絡及投訴',
      blocks: [
        { type: 'paragraph', text: '有關問題、私隱要求及投訴可發送至：' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: '電郵', addressLabel: '註冊地址', address: registeredAddress },
        { type: 'paragraph', text: '請在主旨欄註明「Privacy Request（私隱要求）」或「Privacy Complaint（私隱投訴）」。請提供足夠資料讓我們理解您的要求，但不要透過普通電郵發送密碼或不必要的身份證明文件。' },
        { type: 'paragraph', text: '我們會確認收到並調查私隱投訴，並在適用法律規定的期限內回應。如您對我們的回應不滿意，您可能有權向您所在司法管轄區的私隱或資料保障機構投訴。' },
      ],
    },
  ],
)

const ja = createPolicy(
  {
    eyebrow: '法務・プライバシー',
    title: 'プライバシーポリシー',
    intro: 'KOS Markets Limitedによる個人情報の収集、利用、保管および保護について説明します。',
    effectiveDate: '施行日：2026年9月16日',
  },
  'このページの内容',
  [
    {
      nav: '適用範囲',
      title: '当社についておよび本ポリシーの適用範囲',
      blocks: [
        { type: 'paragraph', text: '本プライバシーポリシーは、お客様がwww.kosmarkets.comを閲覧する場合、当社に連絡する場合、口座を申請または保有する場合、クライアントポータルもしくは取引関連サービスを利用する場合、またはその他の方法で当社とやり取りする場合に、KOS Markets Limitedが個人情報をどのように収集、利用、開示、保管および保護するかを説明するものです。' },
        { type: 'paragraph', text: '本ポリシーにおける「KOS Markets」「当社」および「当社の」は、KOS Markets Limitedを指します。KOS Markets Limitedはセントルシアで設立され、登録番号は2026-00467、登録住所はGround Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Luciaです。KOS Markets Limitedは、ウェブサイト、クライアントポータルおよび本ポリシーの対象となる関連サービスを通じて収集される個人情報について責任を負います。' },
        { type: 'paragraph', text: '本ポリシーは、特定の商品、サービス、キャンペーンまたは法域について提供される個別のプライバシー通知に代わるものではありません。個別の通知と本ポリシーが抵触する場合、該当する処理には個別の通知が適用されます。' },
      ],
    },
    {
      nav: '収集する情報',
      title: '当社が収集する個人情報',
      blocks: [
        {
          type: 'list',
          intro: '当社が収集する個人情報は、お客様と当社との関わり方により異なり、次の情報が含まれる場合があります。',
          items: [
            { label: '本人確認情報', text: '：氏名、生年月日、国籍、署名、政府発行の身分証明書、写真および本人確認に必要な情報。' },
            { label: '連絡先情報', text: '：居住先または郵送先住所、メールアドレスおよび電話番号。' },
            { label: '口座およびプロフィール情報', text: '：ログイン情報、口座識別子、言語、連絡方法の希望および顧客区分。' },
            { label: '財務および取引情報', text: '：銀行または決済情報、入出金、残高、取引履歴、資金源に関する情報、ならびに必要な場合の財務状況に関する情報。' },
            { label: '取引およびサービス情報', text: '：取引口座の活動、プラットフォームの利用、指示、依頼、苦情および当社が提供するサービスに関する記録。' },
            { label: 'コンプライアンス情報', text: '：本人確認、マネーロンダリング対策、制裁対象者照合、不正防止、適合性または妥当性評価、規制当局への報告に使用される情報。' },
            { label: '通信内容', text: '：メール、オンラインチャット、録音される場合の電話、サポート依頼、アンケート回答および当社とのその他の連絡。' },
            { label: '技術および利用情報', text: '：IPアドレス、端末およびブラウザの種類、OS、端末識別子、参照元ページ、閲覧ページ、アクセス時刻、IPアドレスから推定されるおおよその位置情報、ならびにセキュリティまたは診断データ。' },
            { label: 'マーケティング情報', text: '：通知の受信設定および当社のメッセージやキャンペーンへの反応に関する情報。' },
          ],
        },
        { type: 'paragraph', text: '一部の情報は、機微情報とみなされ、または追加の法的保護の対象となる場合があります。当社は、必要かつ法律で認められる場合に限り、必要に応じてお客様の同意を得て、当該情報を収集および利用します。' },
      ],
    },
    {
      nav: '収集方法',
      title: '個人情報の収集方法',
      blocks: [
        {
          type: 'list',
          intro: '当社は次の方法で個人情報を収集します。',
          items: [
            { text: 'お客様がウェブサイトを閲覧し、当社に連絡し、登録または口座申請を行い、書類を提出し、サービスを利用し、キャンペーンに参加し、またはカスタマーサポートと連絡する際に、お客様から直接収集します。' },
            { text: 'お客様が当社のウェブサイト、クライアントポータルまたは関連技術を利用する際に、Cookie、ローカルストレージ、ログおよび類似技術を通じて自動的に収集します。' },
            { text: 'Sumsubならびに不正防止、制裁対象者照合、決済、銀行、取引プラットフォーム、ホスティング、カスタマーサポートおよびデータサービスの各事業者を含むサービス提供者から収集します。' },
            { text: '確認またはコンプライアンス上必要な場合、公的登録簿、規制当局、法執行機関、信用・不正防止データベースおよびその他の適法な情報源から収集します。' },
          ],
        },
        { type: 'paragraph', text: 'お客様が他者の個人情報を当社に提供する場合、適法な根拠を有し、必要に応じてその方に本ポリシーを通知する必要があります。' },
        { type: 'paragraph', text: 'お客様は、求められた情報を提供しないことを選択できます。ただし、法令、契約、セキュリティ管理または運用上の必要性により情報が必要な場合、当社は口座の開設・維持、取引の処理、依頼への対応または一部サービスの提供を行えないことがあります。' },
      ],
    },
    {
      nav: '利用目的',
      title: '個人情報を利用する方法と理由',
      blocks: [
        {
          type: 'list',
          intro: '当社は個人情報を次の目的で利用することがあります。',
          items: [
            { text: 'ウェブサイト、クライアントポータル、口座、取引およびお客様が依頼したその他のサービスの提供、管理およびサポート。' },
            { text: '本人確認および当社がサービスを提供できるかどうかの評価。' },
            { text: 'マネーロンダリング対策、テロ資金供与対策、制裁、不正防止およびその他のコンプライアンス確認。' },
            { text: '入出金、支払い、口座に関する指示およびサービス依頼の処理。' },
            { text: '口座、取引、セキュリティ、サポート依頼、苦情ならびにサービスまたは法的条件の変更に関する連絡。' },
            { text: '顧客、システム、従業員、権利および財産の保護、ならびに不正、悪用、セキュリティ事故または違法行為の疑いの調査。' },
            { text: '法令、規制、報告、監査、税務、記録保存および法執行上の義務の履行。' },
            { text: '法的請求の確立、行使または防御および紛争の解決。' },
            { text: 'ウェブサイト、システム、サービス、コンテンツおよび顧客体験の監視、保守、問題解決および改善。' },
            { text: '合理的に可能な場合、集計または匿名化した情報を用いた事業計画、報告、品質保証および統計分析。' },
            { text: '法律で認められ、お客様の設定に従うマーケティング情報の送信。' },
          ],
        },
        { type: 'paragraph', text: '適用法に応じて、当社は契約の履行または契約締結前にお客様の依頼により行う措置、法的もしくは規制上の義務の遵守、当社または第三者の正当な利益、人の重大な利益の保護、およびお客様の同意のうち一つ以上を根拠とします。同意に基づく場合、お客様はいつでも同意を撤回できますが、撤回前に行われた処理には影響しません。' },
      ],
    },
    {
      nav: '本人確認',
      title: '本人確認および顔画像',
      blocks: [
        { type: 'paragraph', text: '当社は、本人確認および関連するコンプライアンス確認にSumsubを利用します。この手続きでは、身分証明書、写真、動画または自撮り画像の提出をお願いする場合があります。顔認証を使用する場合、Sumsubは顔画像と身分証明書の写真を照合し、生体検知を実施することがあります。Sumsubは、当社に代わり、契約上および法的な義務に従って当該情報を処理します。' },
        { type: 'paragraph', text: 'KOS Marketsは、自社システムで生体認証テンプレートを独自に作成または保管しません。当社は、コンプライアンス、不正防止、セキュリティ、紛争および記録保存上の義務を満たすために必要な確認結果および記録を受領し、保管します。適用法により顔認証情報が生体情報または機微情報とされる場合、法令で必要となる追加通知または同意は確認手続き中に提供されます。' },
      ],
    },
    {
      nav: '開示',
      title: '個人情報を開示する場合',
      blocks: [
        {
          type: 'list',
          intro: '当社は個人情報を次の者に開示することがあります。',
          items: [
            { text: 'Sumsubを含む、本人確認、マネーロンダリング対策、制裁対象者照合、不正防止およびリスク管理の各事業者。' },
            { text: '銀行、決済処理業者、決済サービス提供者、カストディアンならびに入出金または取引に関与するその他の当事者。' },
            { text: '取引プラットフォーム、市場データ、流動性、技術、通信、ホスティング、クラウド、サイバーセキュリティ、ウェブサイト、分析、カスタマーサポートおよび通信の各事業者（オンラインチャットの提供者を含みます）。' },
            { text: '法律、会計、コンプライアンス、保険およびコンサルティングの提供者を含む専門アドバイザーおよび監査人。' },
            { text: '法律により開示が要求または許可される場合の規制当局、裁判所、法執行機関、税務当局、紛争解決機関およびその他の公的機関。' },
            { text: '適切な機密保持措置を条件として、合併、再編、資金調達、事業または資産の全部もしくは一部の売却・移転に関連する買主、投資家、貸主、アドバイザーまたは承継者。' },
            { text: 'お客様が指示もしくは同意した者、または法律上開示が認められるその他の者。' },
          ],
        },
        { type: 'paragraph', text: '当社は、サービス提供者に対し、個人情報を保護し、当社へのサービス提供または法律で認められる目的にのみ利用するよう求めます。当社は個人情報を金銭の対価として販売しません。適用法が「販売」または「共有」をより広く定義する場合、当社は当該法令で必要とされる通知と選択肢を提供します。' },
      ],
    },
    {
      nav: 'Cookie',
      title: 'Cookieおよび類似技術',
      blocks: [
        { type: 'paragraph', text: '当社ウェブサイトは、サイトの運営、言語や表示設定の記憶、セキュリティの維持、オンラインチャットの提供、利用状況の把握、問題の診断および性能改善のため、Cookie、ローカルストレージ、スクリプトおよび類似技術を使用します。一部の技術は第三者が提供し、その第三者が技術情報および利用情報を受け取る場合があります。' },
        { type: 'paragraph', text: '法律で必要な場合、必須ではない技術はお客様の同意後にのみ使用します。利用可能な場合は当社のCookie設定、またはブラウザ設定で選択を変更できます。一部の技術を無効にすると、ウェブサイトまたはサービスの一部が正常に機能しない場合があります。' },
        { type: 'paragraph', text: '使用する技術、提供者、目的および期間の詳細は、別途Cookieポリシーで提供する場合があります。' },
      ],
    },
    {
      nav: '国際移転',
      title: 'データの所在および国際移転',
      blocks: [
        { type: 'paragraph', text: '当社の主要な顧客関係管理システムおよび同システム内の顧客記録は、シンガポールでホスティングされています。当社の顧客およびサービス提供者は国際的に活動しているため、個人情報はお客様の居住国以外の国からアクセスされ、または当該国で処理される場合があります。これらの国のデータ保護法は異なる場合があります。' },
        { type: 'paragraph', text: '必要な場合、当社は、国際移転される個人情報を保護するための契約上の保護、移転手段、アクセス制御およびその他の措置を講じます。お客様の個人情報に関連する保護措置の詳細については、当社にお問い合わせください。' },
      ],
    },
    {
      nav: '保存期間',
      title: '個人情報の保存期間',
      blocks: [
        { type: 'paragraph', text: '口座が開設されている間、当社は口座、本人確認、取引および関連するコンプライアンス情報を保存します。当社は少なくとも12か月ごとにKYC情報を見直し、更新します。リスク、法令、規制またはお客様の状況の変化により必要な場合は、より頻繁に見直すことがあります。' },
        { type: 'paragraph', text: '口座閉鎖後、当社は関連する個人情報を12か月間保存します。適用法、規制上の要件、法的請求、紛争、監査または公的調査により、より長い期間が必要な場合、当社はその期間、関連情報を保存します。この法的な保存要件は12か月の期間に優先します。' },
        { type: 'paragraph', text: '情報が不要になった場合、当社は削除、匿名化、または削除が可能になるまで安全に隔離します。' },
      ],
    },
    {
      nav: 'セキュリティ',
      title: '個人情報の保護方法',
      blocks: [
        { type: 'paragraph', text: '当社は、個人情報の偶発的または違法な紛失、悪用、不正アクセス、改変、開示または破壊を防止するため、管理的、技術的および物理的な保護措置を講じます。これには、アクセス制御、適切な場合の暗号化、システム監視、セキュリティテスト、従業員の守秘義務およびサービス提供者の管理が含まれる場合があります。' },
        { type: 'paragraph', text: 'ウェブサイト、通信または保存システムに完全な安全性はありません。ログイン認証情報を保護し、安全な端末およびネットワークを使用し、口座または個人情報への不正アクセスが疑われる場合は速やかに当社へご連絡ください。' },
      ],
    },
    {
      nav: 'お客様の権利',
      title: 'プライバシーに関する権利',
      blocks: [
        {
          type: 'list',
          intro: '居住地および適用法により、お客様は次の権利を有する場合があります。',
          items: [
            { text: '当社が個人情報を処理しているか確認し、アクセスを請求すること。' },
            { text: '不正確または不完全な情報の訂正を求めること。' },
            { text: '一定の場合に情報の削除を求めること。' },
            { text: '処理の制限を求め、または特定の処理に異議を申し立てること。' },
            { text: '一定の情報を可搬性のある形式で受け取ること。' },
            { text: '処理が同意に基づく場合に同意を撤回すること。' },
            { text: 'ダイレクトマーケティングを拒否すること。' },
            { text: '該当する場合、国際移転または自動意思決定に関する情報を求めること。' },
            { text: '当社または関係するプライバシー・データ保護当局に苦情を申し立てること。' },
          ],
        },
        { type: 'paragraph', text: 'これらの権利は絶対的なものではありません。たとえば、金融サービス、マネーロンダリング対策、税務、規制、紛争または法的義務を遵守するため、情報を保存する必要がある場合があります。請求への対応前に本人確認をお願いすることがあります。当社は適用法で定める期間内に回答し、請求を拒否または制限する適法な理由がある場合は説明します。' },
        { type: 'paragraph', text: '権利を行使するには、第16節の連絡先を利用し、件名に「Privacy Request」と記載してください。通常のメールでパスワードまたは不要な身分証明書を送信しないでください。' },
      ],
    },
    {
      nav: 'マーケティング',
      title: 'マーケティング情報',
      blocks: [
        { type: 'paragraph', text: '法律で認められる場合、当社は商品、サービス、イベントまたはキャンペーンに関する情報を送信することがあります。マーケティングメッセージの配信停止機能または当社への連絡により、受信を拒否できます。当社は引き続き、お客様との関係に必要なサービス、口座、取引、セキュリティ、法務または規制上の連絡を送る場合があります。' },
      ],
    },
    {
      nav: '未成年者',
      title: '未成年者',
      blocks: [
        { type: 'paragraph', text: '当社のウェブサイトおよびサービスは18歳未満の方を対象としておらず、当社はそのような方の口座を故意に開設しません。18歳未満の方が当社に個人情報を提供したと思われる場合は、調査および適切な措置のため当社にご連絡ください。' },
      ],
    },
    {
      nav: '第三者',
      title: '第三者のウェブサイトおよびサービス',
      blocks: [
        { type: 'paragraph', text: '当社ウェブサイトには、第三者へのリンク、または第三者のコンテンツやサービスが含まれる場合があります。第三者は、自らのプライバシー通知に基づき個人情報を収集することがあります。当社は第三者のプライバシー慣行について責任を負いません。情報を提供またはサービスを利用する前に、その通知をお読みください。' },
      ],
    },
    {
      nav: 'ポリシーの変更',
      title: '本ポリシーの変更',
      blocks: [
        { type: 'paragraph', text: '当社は、業務、サービスまたは法的義務の変更を反映するため、本プライバシーポリシーを更新する場合があります。改定版を本ページに掲載し、施行日を更新します。法律で必要な場合、重大な変更の発効前に追加通知を行い、または同意を求めます。' },
      ],
    },
    {
      nav: 'お問い合わせ',
      title: 'お問い合わせおよび苦情',
      blocks: [
        { type: 'paragraph', text: 'ご質問、プライバシーに関する請求および苦情は、次の連絡先にお送りください。' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: 'メール', addressLabel: '登録住所', address: registeredAddress },
        { type: 'paragraph', text: '件名に「Privacy Request」または「Privacy Complaint」と記載してください。当社が内容を理解するために十分な情報を含めてください。ただし、通常のメールでパスワードまたは不要な身分証明書を送信しないでください。' },
        { type: 'paragraph', text: '当社はプライバシーに関する苦情を受領し、調査したうえで、適用法で定める期間内に回答します。当社の回答に納得できない場合、お客様の法域におけるプライバシーまたはデータ保護当局に苦情を申し立てる権利を有する場合があります。' },
      ],
    },
  ],
)

const ko = createPolicy(
  {
    eyebrow: '법률 및 개인정보',
    title: '개인정보 처리방침',
    intro: 'KOS Markets Limited가 개인정보를 수집, 이용, 보관 및 보호하는 방법을 안내합니다.',
    effectiveDate: '시행일: 2026년 9월 16일',
  },
  '이 페이지의 내용',
  [
    {
      nav: '적용 범위',
      title: '회사 소개 및 본 방침의 적용 범위',
      blocks: [
        { type: 'paragraph', text: '본 개인정보 처리방침은 고객이 www.kosmarkets.com을 방문하거나, 당사와 소통하거나, 계좌를 신청 또는 보유하거나, 고객 포털이나 거래 관련 서비스를 이용하거나, 그 밖의 방식으로 당사와 상호작용할 때 KOS Markets Limited가 개인정보를 수집, 이용, 공개, 보관 및 보호하는 방법을 설명합니다.' },
        { type: 'paragraph', text: '본 방침에서 "KOS Markets", "당사" 및 "당사의"는 KOS Markets Limited를 의미합니다. KOS Markets Limited는 세인트루시아에 등록번호 2026-00467로 설립되었으며 등록 주소는 Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia입니다. KOS Markets Limited는 웹사이트, 고객 포털 및 본 방침이 적용되는 관련 서비스를 통해 수집한 개인정보에 대한 책임을 집니다.' },
        { type: 'paragraph', text: '본 방침은 특정 상품, 서비스, 프로모션 또는 관할권에 대해 제공되는 별도의 개인정보 고지를 대체하지 않습니다. 별도 고지와 본 방침이 상충하는 경우 해당 처리에는 별도 고지가 적용됩니다.' },
      ],
    },
    {
      nav: '수집 정보',
      title: '당사가 수집하는 개인정보',
      blocks: [
        {
          type: 'list',
          intro: '당사가 수집하는 개인정보는 고객이 당사와 상호작용하는 방식에 따라 달라지며 다음을 포함할 수 있습니다.',
          items: [
            { label: '신원 정보', text: ': 이름, 생년월일, 국적, 서명, 정부 발급 신분증, 사진 및 신원 확인에 필요한 정보.' },
            { label: '연락처 정보', text: ': 거주지 또는 우편 주소, 이메일 주소 및 전화번호.' },
            { label: '계좌 및 프로필 정보', text: ': 로그인 정보, 계좌 식별자, 언어, 연락 수신 설정 및 고객 분류.' },
            { label: '재무 및 거래 정보', text: ': 은행 또는 결제 정보, 입금, 출금, 잔액, 거래 내역, 자금 출처 정보 및 필요한 경우 재무 상황에 관한 정보.' },
            { label: '거래 및 서비스 정보', text: ': 거래 계좌 활동, 플랫폼 이용, 지시, 요청, 불만 및 당사가 제공하는 서비스와 관련된 기록.' },
            { label: '규정 준수 정보', text: ': 신원 확인, 자금세탁방지 확인, 제재 심사, 사기 방지, 적합성 또는 적정성 평가 및 규제 보고에 사용되는 정보.' },
            { label: '통신 내용', text: ': 이메일, 온라인 채팅 메시지, 녹음되는 경우의 전화 통화, 지원 요청, 설문 응답 및 당사와의 기타 연락.' },
            { label: '기술 및 이용 정보', text: ': IP 주소, 기기 및 브라우저 유형, 운영체제, 기기 식별자, 유입 페이지, 조회 페이지, 접속 시간, IP 주소에서 추정한 대략적 위치 및 보안 또는 진단 데이터.' },
            { label: '마케팅 정보', text: ': 연락 수신 설정 및 당사의 메시지나 프로모션과의 상호작용에 관한 정보.' },
          ],
        },
        { type: 'paragraph', text: '일부 정보는 민감정보로 간주되거나 추가적인 법적 보호를 받을 수 있습니다. 당사는 필요하고 법률이 허용하며 요구되는 경우 고객의 동의를 받은 경우에만 이러한 정보를 수집하고 이용합니다.' },
      ],
    },
    {
      nav: '수집 방법',
      title: '개인정보 수집 방법',
      blocks: [
        {
          type: 'list',
          intro: '당사는 다음과 같은 방법으로 개인정보를 수집합니다.',
          items: [
            { text: '고객이 웹사이트를 방문하고, 당사에 연락하고, 등록 또는 계좌 신청을 하고, 서류를 제출하고, 서비스를 이용하고, 프로모션에 참여하거나 고객 지원팀과 소통할 때 고객으로부터 직접 수집합니다.' },
            { text: '고객이 당사 웹사이트, 고객 포털 또는 관련 기술을 이용할 때 쿠키, 로컬 저장소, 로그 및 유사 기술을 통해 자동으로 수집합니다.' },
            { text: 'Sumsub 및 사기 방지, 제재 심사, 결제, 은행, 거래 플랫폼, 호스팅, 고객 지원, 데이터 서비스 제공업체를 포함한 서비스 제공업체로부터 수집합니다.' },
            { text: '확인 또는 규정 준수에 필요한 경우 공공 등록부, 규제기관, 법 집행기관, 신용 또는 사기 방지 데이터베이스 및 기타 합법적인 출처에서 수집합니다.' },
          ],
        },
        { type: 'paragraph', text: '타인의 개인정보를 당사에 제공하는 경우 합법적인 근거가 있어야 하며, 필요한 경우 해당인에게 본 방침을 알려야 합니다.' },
        { type: 'paragraph', text: '고객은 요청받은 정보를 제공하지 않을 수 있습니다. 다만 법률, 규정, 계약, 보안 통제 또는 운영상 필요에 따라 해당 정보가 필요한 경우 당사는 계좌 개설 또는 유지, 거래 처리, 요청 대응 또는 일부 서비스 제공이 불가능할 수 있습니다.' },
      ],
    },
    {
      nav: '이용 목적',
      title: '개인정보 이용 방법 및 목적',
      blocks: [
        {
          type: 'list',
          intro: '당사는 개인정보를 다음 목적으로 이용할 수 있습니다.',
          items: [
            { text: '웹사이트, 고객 포털, 계좌, 거래 및 고객이 요청한 기타 서비스를 제공, 관리 및 지원.' },
            { text: '고객의 신원을 확인하고 당사가 서비스를 제공할 수 있는지 평가.' },
            { text: '자금세탁방지, 테러자금조달방지, 제재, 사기 및 기타 규정 준수 확인 수행.' },
            { text: '입금, 출금, 결제, 계좌 지시 및 서비스 요청 처리.' },
            { text: '계좌, 거래, 보안, 지원 요청, 불만 및 서비스나 법적 약관의 변경에 관해 고객과 소통.' },
            { text: '고객, 시스템, 직원, 권리 및 재산을 보호하고 의심되는 사기, 오용, 보안 사고 또는 불법 행위를 조사.' },
            { text: '법률, 규제, 보고, 감사, 세금, 기록 보관 및 법 집행 의무 이행.' },
            { text: '법적 청구를 제기, 행사 또는 방어하고 분쟁 해결.' },
            { text: '웹사이트, 시스템, 서비스, 콘텐츠 및 고객 경험을 모니터링, 유지, 문제 해결 및 개선.' },
            { text: '합리적으로 가능한 경우 집계 또는 비식별화된 정보를 사용하여 사업 계획, 보고, 품질 보증 및 통계 분석 수행.' },
            { text: '법률이 허용하고 고객의 설정에 부합하는 마케팅 통신 발송.' },
          ],
        },
        { type: 'paragraph', text: '적용 법률에 따라 당사는 계약 이행 또는 계약 체결 전 고객의 요청에 따른 조치, 법적 또는 규제 의무 준수, 당사 또는 제3자의 정당한 이익, 개인의 중대한 이익 보호 및 고객의 동의 중 하나 이상을 처리 근거로 삼습니다. 동의에 근거하는 경우 고객은 언제든지 동의를 철회할 수 있으나, 철회 전에 이루어진 처리에는 영향을 미치지 않습니다.' },
      ],
    },
    {
      nav: '신원 확인',
      title: '신원 확인 및 얼굴 이미지',
      blocks: [
        { type: 'paragraph', text: '당사는 신원 확인 및 관련 규정 준수 확인을 위해 Sumsub를 이용합니다. 이 과정에서 신분증, 사진, 동영상 또는 셀피 이미지 제공을 요청할 수 있습니다. 얼굴 인증을 사용하는 경우 Sumsub는 얼굴 이미지와 신분증 사진을 비교하고 실재성 검사를 수행할 수 있습니다. Sumsub는 당사를 대신하여 계약상 및 법적 의무에 따라 해당 정보를 처리합니다.' },
        { type: 'paragraph', text: 'KOS Markets는 자체 시스템에서 생체정보 템플릿을 별도로 생성하거나 보관하지 않습니다. 당사는 규정 준수, 사기 방지, 보안, 분쟁 및 기록 보관 의무를 충족하는 데 필요한 확인 결과와 기록을 수령하고 보관합니다. 적용 법률이 얼굴 인증 정보를 생체정보 또는 민감정보로 취급하는 경우 법률상 필요한 추가 고지 또는 동의는 확인 과정에서 제공됩니다.' },
      ],
    },
    {
      nav: '정보 공개',
      title: '개인정보를 공개하는 경우',
      blocks: [
        {
          type: 'list',
          intro: '당사는 개인정보를 다음 대상에게 공개할 수 있습니다.',
          items: [
            { text: 'Sumsub를 포함한 신원 확인, 자금세탁방지, 제재 심사, 사기 방지 및 위험 관리 제공업체.' },
            { text: '은행, 결제 처리업체, 결제 서비스 제공업체, 수탁기관 및 입금, 출금 또는 거래에 관여하는 기타 당사자.' },
            { text: '온라인 채팅 서비스 제공업체를 포함한 거래 플랫폼, 시장 데이터, 유동성, 기술, 통신, 호스팅, 클라우드, 사이버보안, 웹사이트, 분석, 고객 지원 및 커뮤니케이션 제공업체.' },
            { text: '법률, 회계, 규정 준수, 보험 및 컨설팅 제공업체를 포함한 전문 자문인 및 감사인.' },
            { text: '법률상 공개가 요구되거나 허용되는 경우 규제기관, 법원, 법 집행기관, 세무 당국, 분쟁 해결기관 및 기타 공공기관.' },
            { text: '적절한 비밀유지 보호조치를 전제로, 제안되거나 완료된 합병, 조직 개편, 자금 조달, 사업 또는 자산 전부나 일부의 매각 또는 이전과 관련된 인수자, 투자자, 대출기관, 자문인 또는 승계인.' },
            { text: '고객이 지시하거나 동의한 자 또는 법률상 공개가 허용되는 기타 자.' },
          ],
        },
        { type: 'paragraph', text: '당사는 서비스 제공업체가 개인정보를 보호하고 당사에 제공하는 서비스 또는 법률이 허용하는 목적에만 이용하도록 요구합니다. 당사는 금전적 대가를 받고 개인정보를 판매하지 않습니다. 적용 법률이 "판매" 또는 "공유"를 더 넓게 정의하는 경우 해당 법률이 요구하는 고지 및 선택권을 제공합니다.' },
      ],
    },
    {
      nav: '쿠키',
      title: '쿠키 및 유사 기술',
      blocks: [
        { type: 'paragraph', text: '당사 웹사이트는 웹사이트 운영, 언어 및 표시 설정 기억, 보안 유지, 온라인 채팅 제공, 웹사이트 이용 파악, 문제 진단 및 성능 개선을 위해 쿠키, 로컬 저장소, 스크립트 및 유사 기술을 사용합니다. 일부 기술은 제3자가 제공하며 해당 제3자가 기술 및 이용 정보를 수신할 수 있습니다.' },
        { type: 'paragraph', text: '법률상 필요한 경우 필수적이지 않은 기술은 고객의 동의 후에만 사용합니다. 이용 가능한 경우 당사의 쿠키 설정 또는 브라우저 설정을 통해 선택을 변경할 수 있습니다. 일부 기술을 차단하면 웹사이트나 서비스의 일부가 제대로 작동하지 않을 수 있습니다.' },
        { type: 'paragraph', text: '당사가 사용하는 기술, 제공업체, 목적 및 기간에 대한 자세한 내용은 별도의 쿠키 정책에서 제공될 수 있습니다.' },
      ],
    },
    {
      nav: '국외 이전',
      title: '데이터 위치 및 국외 이전',
      blocks: [
        { type: 'paragraph', text: '당사의 주요 고객 관계 관리 시스템 및 해당 시스템에 보관되는 고객 기록은 싱가포르에서 호스팅됩니다. 당사의 고객과 서비스 제공업체가 국제적으로 운영되므로 개인정보는 고객의 거주 국가 외의 국가에서 접근되거나 처리될 수 있습니다. 해당 국가의 데이터 보호법은 다를 수 있습니다.' },
        { type: 'paragraph', text: '필요한 경우 당사는 국외로 이전되는 개인정보를 보호하기 위해 계약상 보호조치, 이전 메커니즘, 접근 통제 및 기타 보호조치를 사용합니다. 고객의 개인정보와 관련된 보호조치에 대한 자세한 내용은 당사에 문의할 수 있습니다.' },
      ],
    },
    {
      nav: '보유 기간',
      title: '개인정보 보유 기간',
      blocks: [
        { type: 'paragraph', text: '계좌가 개설된 상태인 동안 당사는 계좌, 신원 확인, 거래 및 관련 규정 준수 정보를 보관합니다. 당사는 최소 12개월마다 KYC 정보를 검토하고 갱신하며 위험, 법률, 규정 또는 고객의 상황 변화에 따라 더 자주 검토할 수 있습니다.' },
        { type: 'paragraph', text: '계좌가 폐쇄된 후 당사는 관련 개인정보를 12개월간 보관합니다. 적용 법률, 규제 요건, 법적 청구, 분쟁, 감사 또는 공식 조사로 더 긴 기간이 요구되는 경우 해당 기간 동안 관련 정보를 보관합니다. 이러한 법적 보유 요건은 12개월 기간보다 우선합니다.' },
        { type: 'paragraph', text: '정보가 더 이상 필요하지 않으면 당사는 이를 삭제, 익명화하거나 삭제가 가능할 때까지 안전하게 격리합니다.' },
      ],
    },
    {
      nav: '보안',
      title: '개인정보 보호 방법',
      blocks: [
        { type: 'paragraph', text: '당사는 개인정보의 우발적 또는 불법적 손실, 오용, 무단 접근, 변경, 공개 또는 파기를 방지하기 위한 관리적, 기술적 및 물리적 보호조치를 사용합니다. 여기에는 접근 통제, 적절한 경우 암호화, 시스템 모니터링, 보안 테스트, 직원 비밀유지 요건 및 서비스 제공업체 통제가 포함될 수 있습니다.' },
        { type: 'paragraph', text: '어떠한 웹사이트, 전송 또는 저장 시스템도 완전히 안전하지는 않습니다. 로그인 정보를 보호하고 안전한 기기와 네트워크를 사용해야 하며, 계좌 또는 개인정보에 대한 무단 접근이 의심되면 즉시 당사에 연락해야 합니다.' },
      ],
    },
    {
      nav: '고객의 권리',
      title: '개인정보 보호 권리',
      blocks: [
        {
          type: 'list',
          intro: '거주 지역 및 적용 법률에 따라 고객은 다음 권리를 가질 수 있습니다.',
          items: [
            { text: '당사가 개인정보를 처리하는지 문의하고 접근을 요청할 권리.' },
            { text: '부정확하거나 불완전한 정보의 정정을 요청할 권리.' },
            { text: '특정 상황에서 정보 삭제를 요청할 권리.' },
            { text: '처리 제한을 요청하거나 특정 처리에 이의를 제기할 권리.' },
            { text: '특정 정보를 이동 가능한 형식으로 받을 권리.' },
            { text: '처리가 동의에 근거하는 경우 동의를 철회할 권리.' },
            { text: '직접 마케팅을 거부할 권리.' },
            { text: '해당하는 경우 국외 이전 또는 자동화된 의사결정에 관한 정보를 요청할 권리.' },
            { text: '당사 또는 관련 개인정보 보호기관에 불만을 제기할 권리.' },
          ],
        },
        { type: 'paragraph', text: '이러한 권리는 절대적이지 않습니다. 예를 들어 금융 서비스, 자금세탁방지, 세무, 규제, 분쟁 또는 법적 의무를 준수하기 위해 정보를 보관해야 할 수 있습니다. 요청 처리 전에 신원 확인을 요구할 수 있습니다. 당사는 적용 법률이 정한 기간 내에 답변하며 요청을 거부하거나 제한할 합법적인 사유가 있는 경우 이를 설명합니다.' },
        { type: 'paragraph', text: '개인정보 보호 권리를 행사하려면 제16절의 연락처를 이용하고 제목에 "Privacy Request"라고 기재하십시오. 일반 이메일로 비밀번호나 불필요한 신분증을 보내지 마십시오.' },
      ],
    },
    {
      nav: '마케팅',
      title: '마케팅 통신',
      blocks: [
        { type: 'paragraph', text: '법률이 허용하는 경우 당사는 상품, 서비스, 행사 또는 프로모션에 관한 정보를 보낼 수 있습니다. 마케팅 메시지의 수신 거부 기능을 사용하거나 당사에 연락하여 수신을 거부할 수 있습니다. 당사는 고객과의 관계에 필요한 서비스, 계좌, 거래, 보안, 법률 또는 규제 관련 통신을 계속 보낼 수 있습니다.' },
      ],
    },
    {
      nav: '미성년자',
      title: '미성년자',
      blocks: [
        { type: 'paragraph', text: '당사의 웹사이트와 서비스는 18세 미만을 대상으로 하지 않으며 당사는 이들을 위해 고의로 계좌를 개설하지 않습니다. 18세 미만의 사람이 당사에 개인정보를 제공했다고 생각되는 경우 당사가 조사하고 적절한 조치를 취할 수 있도록 연락해 주십시오.' },
      ],
    },
    {
      nav: '제3자',
      title: '제3자 웹사이트 및 서비스',
      blocks: [
        { type: 'paragraph', text: '당사 웹사이트에는 제3자 링크 또는 제3자의 콘텐츠와 서비스가 포함될 수 있습니다. 해당 제3자는 자체 개인정보 고지에 따라 개인정보를 수집할 수 있습니다. 당사는 제3자의 개인정보 처리 관행에 대해 책임지지 않으며, 정보를 제공하거나 서비스를 이용하기 전에 해당 고지를 읽을 것을 권장합니다.' },
      ],
    },
    {
      nav: '방침 변경',
      title: '본 방침의 변경',
      blocks: [
        { type: 'paragraph', text: '당사는 업무 관행, 서비스 또는 법적 의무의 변경을 반영하기 위해 본 개인정보 처리방침을 업데이트할 수 있습니다. 개정된 방침을 이 페이지에 게시하고 시행일을 업데이트합니다. 법률상 필요한 경우 중대한 변경이 시행되기 전에 추가 고지를 제공하거나 동의를 요청합니다.' },
      ],
    },
    {
      nav: '연락처',
      title: '문의 및 불만',
      blocks: [
        { type: 'paragraph', text: '질문, 개인정보 관련 요청 및 불만은 다음 연락처로 보낼 수 있습니다.' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: '이메일', addressLabel: '등록 주소', address: registeredAddress },
        { type: 'paragraph', text: '제목에 "Privacy Request" 또는 "Privacy Complaint"라고 기재하십시오. 당사가 요청을 이해하는 데 충분한 정보를 포함하되, 일반 이메일로 비밀번호나 불필요한 신분증을 보내지 마십시오.' },
        { type: 'paragraph', text: '당사는 개인정보 관련 불만의 접수를 확인하고 조사한 후 적용 법률이 정한 기간 내에 답변합니다. 당사의 답변에 만족하지 못하는 경우 고객의 관할 지역 개인정보 보호기관에 불만을 제기할 권리가 있을 수 있습니다.' },
      ],
    },
  ],
)

const ms = createPolicy(
  {
    eyebrow: 'Undang-undang dan privasi',
    title: 'Dasar Privasi',
    intro: 'Cara KOS Markets Limited mengumpul, menggunakan, menyimpan dan melindungi maklumat peribadi.',
    effectiveDate: 'Berkuat kuasa 16 September 2026',
  },
  'Kandungan halaman ini',
  [
    {
      nav: 'Skop',
      title: 'Siapa kami dan skop dasar ini',
      blocks: [
        { type: 'paragraph', text: 'Dasar Privasi ini menerangkan cara KOS Markets Limited mengumpul, menggunakan, mendedahkan, menyimpan dan melindungi maklumat peribadi apabila anda melawati www.kosmarkets.com, berkomunikasi dengan kami, memohon atau memegang akaun, menggunakan portal pelanggan atau perkhidmatan berkaitan perdagangan kami, atau berinteraksi dengan kami melalui cara lain.' },
        { type: 'paragraph', text: 'Dalam dasar ini, "KOS Markets", "kami" dan "milik kami" merujuk kepada KOS Markets Limited. KOS Markets Limited diperbadankan di Saint Lucia dengan nombor pendaftaran 2026-00467 dan beralamat berdaftar di Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia. KOS Markets Limited bertanggungjawab terhadap maklumat peribadi yang dikumpul melalui laman web, portal pelanggan dan perkhidmatan berkaitan yang diliputi oleh dasar ini.' },
        { type: 'paragraph', text: 'Dasar ini tidak menggantikan sebarang notis privasi yang diberikan bagi produk, perkhidmatan, promosi atau bidang kuasa tertentu. Jika notis tertentu bercanggah dengan dasar ini, notis tertentu tersebut terpakai kepada pemprosesan berkenaan.' },
      ],
    },
    {
      nav: 'Maklumat yang dikumpul',
      title: 'Maklumat peribadi yang kami kumpul',
      blocks: [
        {
          type: 'list',
          intro: 'Maklumat peribadi yang kami kumpul bergantung pada cara anda berinteraksi dengan kami dan mungkin termasuk:',
          items: [
            { label: 'Maklumat identiti', text: ', termasuk nama, tarikh lahir, kewarganegaraan, tandatangan, dokumen pengenalan yang dikeluarkan kerajaan, gambar dan maklumat yang diperlukan untuk mengesahkan identiti anda.' },
            { label: 'Maklumat hubungan', text: ', termasuk alamat kediaman atau surat-menyurat, alamat e-mel dan nombor telefon.' },
            { label: 'Maklumat akaun dan profil', text: ', termasuk butiran log masuk, pengecam akaun, bahasa, pilihan komunikasi dan klasifikasi pelanggan.' },
            { label: 'Maklumat kewangan dan transaksi', text: ', termasuk butiran bank atau pembayaran, deposit, pengeluaran, baki, sejarah transaksi, maklumat sumber dana dan, jika diperlukan, maklumat tentang keadaan kewangan anda.' },
            { label: 'Maklumat perdagangan dan perkhidmatan', text: ', termasuk aktiviti akaun dagangan, penggunaan platform, arahan, permintaan, aduan dan rekod berkaitan perkhidmatan kami.' },
            { label: 'Maklumat pematuhan', text: ', termasuk maklumat untuk pengesahan identiti, semakan pencegahan pengubahan wang haram, saringan sekatan, pencegahan penipuan, penilaian kesesuaian atau kewajaran dan pelaporan kawal selia.' },
            { label: 'Komunikasi', text: ', termasuk e-mel, mesej sembang dalam talian, panggilan telefon jika dirakam, permintaan sokongan, respons tinjauan dan surat-menyurat lain dengan kami.' },
            { label: 'Maklumat teknikal dan penggunaan', text: ', termasuk alamat IP, jenis peranti dan pelayar, sistem pengendalian, pengecam peranti, halaman rujukan, halaman yang dilihat, masa akses, lokasi anggaran daripada alamat IP serta data keselamatan atau diagnostik.' },
            { label: 'Maklumat pemasaran', text: ', termasuk pilihan komunikasi dan maklumat mengenai interaksi anda dengan mesej atau promosi kami.' },
          ],
        },
        { type: 'paragraph', text: 'Sesetengah maklumat mungkin dianggap sensitif atau tertakluk kepada perlindungan undang-undang tambahan. Kami mengumpul dan menggunakannya hanya apabila perlu, dibenarkan undang-undang dan, jika dikehendaki, dengan persetujuan anda.' },
      ],
    },
    {
      nav: 'Cara kami mengumpul',
      title: 'Cara kami mengumpul maklumat peribadi',
      blocks: [
        {
          type: 'list',
          intro: 'Kami mengumpul maklumat peribadi:',
          items: [
            { text: 'Secara langsung daripada anda apabila anda melawati laman web, menghubungi kami, mendaftar, memohon akaun, menyerahkan dokumen, menggunakan perkhidmatan, menyertai promosi atau berkomunikasi dengan sokongan pelanggan.' },
            { text: 'Secara automatik apabila anda menggunakan laman web, portal pelanggan atau teknologi berkaitan kami, termasuk melalui kuki, storan setempat, log dan teknologi serupa.' },
            { text: 'Daripada penyedia perkhidmatan, termasuk Sumsub serta penyedia pencegahan penipuan, saringan sekatan, pembayaran, perbankan, platform dagangan, pengehosan, sokongan pelanggan dan perkhidmatan data.' },
            { text: 'Daripada daftar awam, pihak berkuasa kawal selia, badan penguatkuasaan undang-undang, pangkalan data kredit atau pencegahan penipuan dan sumber sah lain jika diperlukan untuk pengesahan atau pematuhan.' },
          ],
        },
        { type: 'paragraph', text: 'Jika anda memberikan maklumat peribadi orang lain, anda mesti mempunyai asas yang sah dan, jika perlu, memaklumkan orang tersebut tentang dasar ini.' },
        { type: 'paragraph', text: 'Anda boleh memilih untuk tidak memberikan maklumat yang diminta. Walau bagaimanapun, kami mungkin tidak dapat membuka atau mengekalkan akaun, memproses transaksi, menjawab permintaan atau menyediakan sesetengah perkhidmatan apabila maklumat tersebut diperlukan oleh undang-undang, peraturan, kontrak, kawalan keselamatan atau keperluan operasi.' },
      ],
    },
    {
      nav: 'Cara kami menggunakan',
      title: 'Cara dan sebab kami menggunakan maklumat peribadi',
      blocks: [
        {
          type: 'list',
          intro: 'Kami mungkin menggunakan maklumat peribadi untuk:',
          items: [
            { text: 'Menyediakan, mentadbir dan menyokong laman web, portal pelanggan, akaun, transaksi dan perkhidmatan lain yang anda minta.' },
            { text: 'Mengesahkan identiti anda dan menilai sama ada kami boleh menyediakan perkhidmatan kepada anda.' },
            { text: 'Melaksanakan semakan pencegahan pengubahan wang haram, pembiayaan keganasan, sekatan, penipuan dan pematuhan lain.' },
            { text: 'Memproses deposit, pengeluaran, pembayaran, arahan akaun dan permintaan perkhidmatan.' },
            { text: 'Berkomunikasi tentang akaun, transaksi, keselamatan, permintaan sokongan, aduan dan perubahan kepada perkhidmatan atau terma undang-undang kami.' },
            { text: 'Melindungi pelanggan, sistem, kakitangan, hak dan harta kami serta menyiasat penipuan, penyalahgunaan, insiden keselamatan atau aktiviti menyalahi undang-undang yang disyaki.' },
            { text: 'Memenuhi kewajipan undang-undang, kawal selia, pelaporan, audit, cukai, penyimpanan rekod dan penguatkuasaan undang-undang.' },
            { text: 'Mewujudkan, melaksanakan atau mempertahankan tuntutan undang-undang dan menyelesaikan pertikaian.' },
            { text: 'Memantau, menyelenggara, menyelesaikan masalah dan menambah baik laman web, sistem, perkhidmatan, kandungan dan pengalaman pelanggan.' },
            { text: 'Menjalankan perancangan perniagaan, pelaporan, jaminan kualiti dan analisis statistik menggunakan maklumat agregat atau dinyahkenal pasti jika munasabah.' },
            { text: 'Menghantar komunikasi pemasaran jika dibenarkan undang-undang dan selaras dengan pilihan anda.' },
          ],
        },
        { type: 'paragraph', text: 'Bergantung pada undang-undang yang terpakai, kami bergantung pada satu atau lebih asas berikut: pelaksanaan kontrak atau langkah yang anda minta sebelum kontrak; pematuhan kewajipan undang-undang atau kawal selia; kepentingan sah kami atau pihak ketiga; perlindungan kepentingan penting seseorang; dan persetujuan anda. Jika pemprosesan berasaskan persetujuan, anda boleh menarik balik persetujuan pada bila-bila masa, tanpa menjejaskan pemprosesan sebelum penarikan balik.' },
      ],
    },
    {
      nav: 'Pengesahan identiti',
      title: 'Pengesahan identiti dan imej wajah',
      blocks: [
        { type: 'paragraph', text: 'Kami menggunakan Sumsub untuk pengesahan identiti dan semakan pematuhan berkaitan. Dalam proses ini, anda mungkin diminta memberikan dokumen pengenalan, gambar, video atau swafoto. Jika pengesahan wajah digunakan, Sumsub mungkin membandingkan imej wajah dengan gambar dalam dokumen pengenalan dan melakukan semakan keaktifan. Sumsub memproses maklumat ini bagi pihak kami mengikut kewajipan kontrak dan undang-undangnya.' },
        { type: 'paragraph', text: 'KOS Markets tidak mencipta atau menyimpan templat biometrik secara bebas dalam sistemnya sendiri. Kami menerima dan menyimpan keputusan pengesahan serta rekod yang diperlukan untuk kewajipan pematuhan, pencegahan penipuan, keselamatan, pertikaian dan penyimpanan rekod. Jika undang-undang menganggap maklumat pengesahan wajah sebagai maklumat biometrik atau sensitif, notis atau persetujuan tambahan yang diperlukan akan diberikan semasa proses pengesahan.' },
      ],
    },
    {
      nav: 'Pendedahan',
      title: 'Bila kami mendedahkan maklumat peribadi',
      blocks: [
        {
          type: 'list',
          intro: 'Kami mungkin mendedahkan maklumat peribadi kepada:',
          items: [
            { text: 'Penyedia pengesahan identiti, pencegahan pengubahan wang haram, saringan sekatan, pencegahan penipuan dan pengurusan risiko, termasuk Sumsub.' },
            { text: 'Bank, pemproses pembayaran, penyedia perkhidmatan pembayaran, penjaga aset dan pihak lain yang terlibat dalam deposit, pengeluaran atau transaksi.' },
            { text: 'Penyedia platform dagangan, data pasaran, kecairan, teknologi, telekomunikasi, pengehosan, awan, keselamatan siber, laman web, analitik, sokongan pelanggan dan komunikasi, termasuk penyedia sembang dalam talian.' },
            { text: 'Penasihat profesional dan juruaudit, termasuk penyedia undang-undang, perakaunan, pematuhan, insurans dan perundingan.' },
            { text: 'Pengawal selia, mahkamah, badan penguatkuasaan undang-undang, pihak berkuasa cukai, badan penyelesaian pertikaian dan pihak berkuasa awam lain apabila pendedahan diwajibkan atau dibenarkan undang-undang.' },
            { text: 'Pembeli, pelabur, pemberi pinjaman, penasihat atau pengganti berkaitan penggabungan, penyusunan semula, pembiayaan, penjualan atau pemindahan semua atau sebahagian perniagaan atau aset kami, tertakluk pada perlindungan kerahsiaan yang sesuai.' },
            { text: 'Orang lain apabila anda mengarahkan atau bersetuju, atau apabila pendedahan dibenarkan undang-undang.' },
          ],
        },
        { type: 'paragraph', text: 'Kami mewajibkan penyedia perkhidmatan melindungi maklumat peribadi dan menggunakannya hanya bagi perkhidmatan kepada kami atau sebagaimana dibenarkan undang-undang. Kami tidak menjual maklumat peribadi untuk wang. Jika undang-undang memberikan maksud lebih luas kepada "penjualan" atau "perkongsian", kami akan menyediakan notis dan pilihan yang dikehendaki.' },
      ],
    },
    {
      nav: 'Kuki',
      title: 'Kuki dan teknologi serupa',
      blocks: [
        { type: 'paragraph', text: 'Laman web kami menggunakan kuki, storan setempat, skrip dan teknologi serupa untuk mengendalikan laman web, mengingati bahasa dan pilihan paparan, mengekalkan keselamatan, menyediakan sembang dalam talian, memahami penggunaan, mendiagnosis masalah dan meningkatkan prestasi. Sesetengah teknologi disediakan pihak ketiga yang mungkin menerima maklumat teknikal dan penggunaan.' },
        { type: 'paragraph', text: 'Jika diwajibkan undang-undang, teknologi tidak penting hanya digunakan selepas anda bersetuju. Anda boleh mengubah pilihan melalui kawalan kuki kami, jika tersedia, atau tetapan pelayar. Menyekat sesetengah teknologi mungkin menyebabkan bahagian tertentu laman web atau perkhidmatan tidak berfungsi dengan betul.' },
        { type: 'paragraph', text: 'Maklumat lanjut tentang teknologi yang kami gunakan, penyedia, tujuan dan tempohnya mungkin diberikan dalam Dasar Kuki berasingan.' },
      ],
    },
    {
      nav: 'Pemindahan antarabangsa',
      title: 'Lokasi data dan pemindahan antarabangsa',
      blocks: [
        { type: 'paragraph', text: 'Sistem pengurusan hubungan pelanggan utama kami dan rekod pelanggan dalam sistem tersebut dihoskan di Singapura. Oleh sebab pelanggan dan penyedia perkhidmatan kami beroperasi di peringkat antarabangsa, maklumat peribadi juga mungkin diakses atau diproses di negara selain negara tempat tinggal anda. Negara tersebut mungkin mempunyai undang-undang perlindungan data yang berbeza.' },
        { type: 'paragraph', text: 'Jika diperlukan, kami menggunakan perlindungan kontrak, mekanisme pemindahan, kawalan akses dan langkah perlindungan lain untuk melindungi maklumat peribadi yang dipindahkan ke luar negara. Anda boleh menghubungi kami untuk maklumat lanjut tentang perlindungan yang berkaitan dengan maklumat anda.' },
      ],
    },
    {
      nav: 'Tempoh penyimpanan',
      title: 'Tempoh kami menyimpan maklumat peribadi',
      blocks: [
        { type: 'paragraph', text: 'Kami menyimpan maklumat akaun, pengesahan identiti, transaksi dan pematuhan berkaitan selagi akaun anda dibuka. Kami menyemak dan mengemas kini maklumat KYC sekurang-kurangnya sekali setiap 12 bulan dan mungkin lebih kerap jika diperlukan oleh risiko, undang-undang, peraturan atau perubahan keadaan anda.' },
        { type: 'paragraph', text: 'Selepas akaun ditutup, kami menyimpan maklumat peribadi berkaitan selama 12 bulan. Jika undang-undang, keperluan kawal selia, tuntutan undang-undang, pertikaian, audit atau siasatan rasmi memerlukan tempoh lebih lama, kami menyimpan maklumat berkenaan untuk tempoh tersebut. Keperluan penyimpanan undang-undang ini mengatasi tempoh 12 bulan.' },
        { type: 'paragraph', text: 'Apabila maklumat tidak lagi diperlukan, kami memadam, menamakan tanpa identiti atau mengasingkannya dengan selamat sehingga pemadaman boleh dilakukan.' },
      ],
    },
    {
      nav: 'Keselamatan',
      title: 'Cara kami melindungi maklumat peribadi',
      blocks: [
        { type: 'paragraph', text: 'Kami menggunakan perlindungan pentadbiran, teknikal dan fizikal untuk melindungi maklumat peribadi daripada kehilangan, penyalahgunaan, akses tanpa kebenaran, pengubahan, pendedahan atau pemusnahan secara tidak sengaja atau menyalahi undang-undang. Ini mungkin termasuk kawalan akses, penyulitan jika sesuai, pemantauan sistem, ujian keselamatan, kewajipan kerahsiaan kakitangan dan kawalan penyedia perkhidmatan.' },
        { type: 'paragraph', text: 'Tiada laman web, penghantaran atau sistem penyimpanan yang selamat sepenuhnya. Lindungi kelayakan log masuk anda, gunakan peranti dan rangkaian yang selamat dan hubungi kami segera jika anda mengesyaki akses tanpa kebenaran kepada akaun atau maklumat peribadi anda.' },
      ],
    },
    {
      nav: 'Hak anda',
      title: 'Hak privasi anda',
      blocks: [
        {
          type: 'list',
          intro: 'Bergantung pada tempat tinggal dan undang-undang yang terpakai, anda mungkin berhak untuk:',
          items: [
            { text: 'Bertanya sama ada kami memproses maklumat peribadi anda dan meminta akses.' },
            { text: 'Meminta pembetulan maklumat yang tidak tepat atau tidak lengkap.' },
            { text: 'Meminta pemadaman maklumat dalam keadaan tertentu.' },
            { text: 'Meminta sekatan pemprosesan atau membantah pemprosesan tertentu.' },
            { text: 'Menerima maklumat tertentu dalam format mudah alih.' },
            { text: 'Menarik balik persetujuan apabila pemprosesan berasaskan persetujuan.' },
            { text: 'Menolak pemasaran langsung.' },
            { text: 'Meminta maklumat tentang pemindahan antarabangsa atau pembuatan keputusan automatik, jika berkenaan.' },
            { text: 'Membuat aduan kepada kami atau pihak berkuasa privasi atau perlindungan data yang berkaitan.' },
          ],
        },
        { type: 'paragraph', text: 'Hak ini tidak mutlak. Contohnya, kami mungkin perlu menyimpan maklumat untuk mematuhi kewajipan perkhidmatan kewangan, pencegahan pengubahan wang haram, cukai, kawal selia, pertikaian atau undang-undang. Kami mungkin meminta pengesahan identiti sebelum bertindak. Kami akan memberi respons dalam tempoh yang dikehendaki undang-undang dan menerangkan alasan sah untuk menolak atau mengehadkan permintaan.' },
        { type: 'paragraph', text: 'Untuk melaksanakan hak privasi, hubungi kami melalui butiran dalam seksyen 16 dan gunakan tajuk "Privacy Request". Jangan hantar kata laluan atau dokumen pengenalan yang tidak perlu melalui e-mel biasa.' },
      ],
    },
    {
      nav: 'Pemasaran',
      title: 'Komunikasi pemasaran',
      blocks: [
        { type: 'paragraph', text: 'Kami mungkin menghantar maklumat tentang produk, perkhidmatan, acara atau promosi jika dibenarkan undang-undang. Anda boleh menarik diri melalui pilihan nyahlanggan dalam mesej pemasaran atau menghubungi kami. Kami masih boleh menghantar komunikasi perkhidmatan, akaun, transaksi, keselamatan, undang-undang atau kawal selia yang diperlukan untuk hubungan kami dengan anda.' },
      ],
    },
    {
      nav: 'Kanak-kanak',
      title: 'Kanak-kanak',
      blocks: [
        { type: 'paragraph', text: 'Laman web dan perkhidmatan kami tidak ditujukan kepada individu di bawah umur 18 tahun dan kami tidak dengan sengaja membuka akaun untuk mereka. Jika anda percaya seseorang di bawah umur 18 tahun telah memberikan maklumat peribadi kepada kami, hubungi kami supaya kami boleh menyiasat dan mengambil tindakan yang sesuai.' },
      ],
    },
    {
      nav: 'Pihak ketiga',
      title: 'Laman web dan perkhidmatan pihak ketiga',
      blocks: [
        { type: 'paragraph', text: 'Laman web kami mungkin mengandungi pautan atau kandungan dan perkhidmatan terbenam daripada pihak ketiga. Pihak ketiga tersebut mungkin mengumpul maklumat peribadi menurut notis privasi mereka sendiri. Kami tidak bertanggungjawab terhadap amalan privasi mereka dan menggalakkan anda membaca notis tersebut sebelum memberikan maklumat atau menggunakan perkhidmatan mereka.' },
      ],
    },
    {
      nav: 'Perubahan dasar',
      title: 'Perubahan kepada dasar ini',
      blocks: [
        { type: 'paragraph', text: 'Kami mungkin mengemas kini Dasar Privasi ini untuk mencerminkan perubahan amalan, perkhidmatan atau kewajipan undang-undang kami. Kami akan menerbitkan dasar yang disemak pada halaman ini dan mengemas kini tarikh kuat kuasa. Jika diwajibkan undang-undang, kami akan memberikan notis tambahan atau meminta persetujuan sebelum perubahan penting berkuat kuasa.' },
      ],
    },
    {
      nav: 'Hubungi kami',
      title: 'Hubungan dan aduan',
      blocks: [
        { type: 'paragraph', text: 'Soalan, permintaan privasi dan aduan boleh dihantar kepada:' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: 'E-mel', addressLabel: 'Alamat berdaftar', address: registeredAddress },
        { type: 'paragraph', text: 'Gunakan tajuk "Privacy Request" atau "Privacy Complaint". Sertakan maklumat yang mencukupi untuk kami memahami permintaan anda, tetapi jangan hantar kata laluan atau dokumen pengenalan yang tidak perlu melalui e-mel biasa.' },
        { type: 'paragraph', text: 'Kami akan mengakui dan menyiasat aduan privasi serta memberi respons dalam tempoh yang dikehendaki undang-undang. Jika anda tidak berpuas hati dengan respons kami, anda mungkin berhak membuat aduan kepada pihak berkuasa privasi atau perlindungan data di bidang kuasa anda.' },
      ],
    },
  ],
)

const id = createPolicy(
  {
    eyebrow: 'Hukum dan privasi',
    title: 'Kebijakan Privasi',
    intro: 'Cara KOS Markets Limited mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi.',
    effectiveDate: 'Berlaku mulai 16 September 2026',
  },
  'Isi halaman ini',
  [
    {
      nav: 'Ruang lingkup',
      title: 'Tentang kami dan ruang lingkup kebijakan ini',
      blocks: [
        { type: 'paragraph', text: 'Kebijakan Privasi ini menjelaskan cara KOS Markets Limited mengumpulkan, menggunakan, mengungkapkan, menyimpan, dan melindungi informasi pribadi saat Anda mengunjungi www.kosmarkets.com, berkomunikasi dengan kami, mengajukan atau memiliki akun, menggunakan portal klien atau layanan terkait perdagangan kami, atau berinteraksi dengan kami melalui cara lain.' },
        { type: 'paragraph', text: 'Dalam kebijakan ini, "KOS Markets", "kami", dan "milik kami" merujuk pada KOS Markets Limited. KOS Markets Limited didirikan di Saint Lucia dengan nomor pendaftaran 2026-00467 dan beralamat terdaftar di Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia. KOS Markets Limited bertanggung jawab atas informasi pribadi yang dikumpulkan melalui situs web, portal klien, dan layanan terkait yang tercakup dalam kebijakan ini.' },
        { type: 'paragraph', text: 'Kebijakan ini tidak menggantikan pemberitahuan privasi yang diberikan untuk produk, layanan, promosi, atau yurisdiksi tertentu. Jika pemberitahuan tertentu bertentangan dengan kebijakan ini, pemberitahuan tertentu tersebut berlaku untuk pemrosesan terkait.' },
      ],
    },
    {
      nav: 'Informasi yang dikumpulkan',
      title: 'Informasi pribadi yang kami kumpulkan',
      blocks: [
        {
          type: 'list',
          intro: 'Informasi pribadi yang kami kumpulkan bergantung pada cara Anda berinteraksi dengan kami dan dapat mencakup:',
          items: [
            { label: 'Informasi identitas', text: ', termasuk nama, tanggal lahir, kewarganegaraan, tanda tangan, identitas yang diterbitkan pemerintah, foto, dan informasi yang diperlukan untuk memverifikasi identitas Anda.' },
            { label: 'Informasi kontak', text: ', termasuk alamat tempat tinggal atau surat-menyurat, alamat email, dan nomor telepon.' },
            { label: 'Informasi akun dan profil', text: ', termasuk detail login, pengenal akun, bahasa, preferensi komunikasi, dan klasifikasi klien.' },
            { label: 'Informasi keuangan dan transaksi', text: ', termasuk detail bank atau pembayaran, setoran, penarikan, saldo, riwayat transaksi, informasi sumber dana, dan bila diperlukan, informasi kondisi keuangan Anda.' },
            { label: 'Informasi perdagangan dan layanan', text: ', termasuk aktivitas akun perdagangan, penggunaan platform, instruksi, permintaan, keluhan, dan catatan terkait layanan yang kami sediakan.' },
            { label: 'Informasi kepatuhan', text: ', termasuk informasi untuk verifikasi identitas, pemeriksaan antipencucian uang, penyaringan sanksi, pencegahan penipuan, penilaian kesesuaian atau kelayakan, dan pelaporan regulator.' },
            { label: 'Komunikasi', text: ', termasuk email, pesan obrolan daring, panggilan telepon apabila direkam, permintaan dukungan, tanggapan survei, dan korespondensi lain dengan kami.' },
            { label: 'Informasi teknis dan penggunaan', text: ', termasuk alamat IP, jenis perangkat dan peramban, sistem operasi, pengenal perangkat, halaman rujukan, halaman yang dilihat, waktu akses, perkiraan lokasi dari alamat IP, serta data keamanan atau diagnostik.' },
            { label: 'Informasi pemasaran', text: ', termasuk preferensi komunikasi dan informasi tentang interaksi Anda dengan pesan atau promosi kami.' },
          ],
        },
        { type: 'paragraph', text: 'Sebagian informasi dapat dianggap sensitif atau memperoleh perlindungan hukum tambahan. Kami hanya mengumpulkan dan menggunakannya jika diperlukan, diizinkan hukum, dan bila diwajibkan, dengan persetujuan Anda.' },
      ],
    },
    {
      nav: 'Cara kami mengumpulkan',
      title: 'Cara kami mengumpulkan informasi pribadi',
      blocks: [
        {
          type: 'list',
          intro: 'Kami mengumpulkan informasi pribadi:',
          items: [
            { text: 'Langsung dari Anda saat mengunjungi situs web, menghubungi kami, mendaftar, mengajukan akun, menyerahkan dokumen, menggunakan layanan, mengikuti promosi, atau berkomunikasi dengan dukungan pelanggan.' },
            { text: 'Secara otomatis saat Anda menggunakan situs web, portal klien, atau teknologi terkait kami, termasuk melalui cookie, penyimpanan lokal, log, dan teknologi serupa.' },
            { text: 'Dari penyedia layanan, termasuk Sumsub serta penyedia pencegahan penipuan, penyaringan sanksi, pembayaran, perbankan, platform perdagangan, hosting, dukungan pelanggan, dan layanan data.' },
            { text: 'Dari daftar publik, otoritas regulator, lembaga penegak hukum, basis data kredit atau pencegahan penipuan, serta sumber sah lain bila diperlukan untuk verifikasi atau kepatuhan.' },
          ],
        },
        { type: 'paragraph', text: 'Jika Anda memberikan informasi pribadi orang lain, Anda harus memiliki dasar hukum dan, bila diperlukan, memberi tahu orang tersebut mengenai kebijakan ini.' },
        { type: 'paragraph', text: 'Anda dapat memilih untuk tidak memberikan informasi yang diminta. Namun, kami mungkin tidak dapat membuka atau mempertahankan akun, memproses transaksi, menanggapi permintaan, atau menyediakan layanan tertentu apabila informasi tersebut diwajibkan oleh hukum, peraturan, kontrak, kontrol keamanan, atau kebutuhan operasional.' },
      ],
    },
    {
      nav: 'Cara kami menggunakan',
      title: 'Cara dan alasan kami menggunakan informasi pribadi',
      blocks: [
        {
          type: 'list',
          intro: 'Kami dapat menggunakan informasi pribadi untuk:',
          items: [
            { text: 'Menyediakan, mengelola, dan mendukung situs web, portal klien, akun, transaksi, dan layanan lain yang Anda minta.' },
            { text: 'Memverifikasi identitas Anda dan menilai apakah kami dapat menyediakan layanan kepada Anda.' },
            { text: 'Melakukan pemeriksaan antipencucian uang, pendanaan terorisme, sanksi, penipuan, dan kepatuhan lainnya.' },
            { text: 'Memproses setoran, penarikan, pembayaran, instruksi akun, dan permintaan layanan.' },
            { text: 'Berkomunikasi tentang akun, transaksi, keamanan, permintaan dukungan, keluhan, dan perubahan layanan atau ketentuan hukum kami.' },
            { text: 'Melindungi klien, sistem, staf, hak, dan properti kami serta menyelidiki dugaan penipuan, penyalahgunaan, insiden keamanan, atau aktivitas melanggar hukum.' },
            { text: 'Memenuhi kewajiban hukum, regulator, pelaporan, audit, pajak, penyimpanan catatan, dan penegakan hukum.' },
            { text: 'Menetapkan, menjalankan, atau membela klaim hukum serta menyelesaikan sengketa.' },
            { text: 'Memantau, memelihara, memecahkan masalah, dan meningkatkan situs web, sistem, layanan, konten, dan pengalaman klien.' },
            { text: 'Melakukan perencanaan bisnis, pelaporan, jaminan kualitas, dan analisis statistik menggunakan informasi agregat atau yang telah dihilangkan identitasnya bila memungkinkan.' },
            { text: 'Mengirim komunikasi pemasaran bila diizinkan hukum dan sesuai preferensi Anda.' },
          ],
        },
        { type: 'paragraph', text: 'Bergantung pada hukum yang berlaku, kami mengandalkan satu atau lebih dasar berikut: pelaksanaan kontrak atau langkah yang Anda minta sebelum kontrak; kepatuhan terhadap kewajiban hukum atau regulator; kepentingan sah kami atau pihak ketiga; perlindungan kepentingan vital seseorang; dan persetujuan Anda. Jika pemrosesan berdasarkan persetujuan, Anda dapat menariknya kapan saja tanpa memengaruhi pemrosesan yang terjadi sebelum penarikan.' },
      ],
    },
    {
      nav: 'Verifikasi identitas',
      title: 'Verifikasi identitas dan gambar wajah',
      blocks: [
        { type: 'paragraph', text: 'Kami menggunakan Sumsub untuk melakukan verifikasi identitas dan pemeriksaan kepatuhan terkait. Dalam proses ini, Anda mungkin diminta memberikan dokumen identitas, foto, video, atau swafoto. Jika verifikasi wajah digunakan, Sumsub dapat membandingkan gambar wajah dengan foto pada dokumen identitas dan melakukan pemeriksaan keaktifan. Sumsub memproses informasi ini atas nama kami sesuai kewajiban kontrak dan hukumnya.' },
        { type: 'paragraph', text: 'KOS Markets tidak secara mandiri membuat atau menyimpan templat biometrik dalam sistemnya sendiri. Kami menerima dan menyimpan hasil verifikasi serta catatan yang diperlukan untuk memenuhi kewajiban kepatuhan, pencegahan penipuan, keamanan, sengketa, dan penyimpanan catatan. Jika hukum menganggap informasi verifikasi wajah sebagai informasi biometrik atau sensitif, pemberitahuan atau persetujuan tambahan yang diwajibkan akan diberikan selama proses verifikasi.' },
      ],
    },
    {
      nav: 'Pengungkapan',
      title: 'Kapan kami mengungkapkan informasi pribadi',
      blocks: [
        {
          type: 'list',
          intro: 'Kami dapat mengungkapkan informasi pribadi kepada:',
          items: [
            { text: 'Penyedia verifikasi identitas, antipencucian uang, penyaringan sanksi, pencegahan penipuan, dan manajemen risiko, termasuk Sumsub.' },
            { text: 'Bank, pemroses pembayaran, penyedia layanan pembayaran, kustodian, dan pihak lain yang terlibat dalam setoran, penarikan, atau transaksi.' },
            { text: 'Penyedia platform perdagangan, data pasar, likuiditas, teknologi, telekomunikasi, hosting, cloud, keamanan siber, situs web, analitik, dukungan pelanggan, dan komunikasi, termasuk penyedia obrolan daring.' },
            { text: 'Penasihat profesional dan auditor, termasuk penyedia hukum, akuntansi, kepatuhan, asuransi, dan konsultasi.' },
            { text: 'Regulator, pengadilan, lembaga penegak hukum, otoritas pajak, badan penyelesaian sengketa, dan otoritas publik lain jika pengungkapan diwajibkan atau diizinkan hukum.' },
            { text: 'Pembeli, investor, pemberi pinjaman, penasihat, atau penerus terkait penggabungan, reorganisasi, pembiayaan, penjualan, atau pengalihan seluruh atau sebagian bisnis atau aset kami, dengan perlindungan kerahasiaan yang sesuai.' },
            { text: 'Pihak lain jika Anda mengarahkan atau menyetujui, atau jika pengungkapan diizinkan oleh hukum.' },
          ],
        },
        { type: 'paragraph', text: 'Kami mewajibkan penyedia layanan melindungi informasi pribadi dan menggunakannya hanya untuk layanan kepada kami atau sebagaimana diizinkan hukum. Kami tidak menjual informasi pribadi untuk uang. Jika hukum memberi makna lebih luas pada "penjualan" atau "berbagi", kami akan memberikan pemberitahuan dan pilihan yang diwajibkan.' },
      ],
    },
    {
      nav: 'Cookie',
      title: 'Cookie dan teknologi serupa',
      blocks: [
        { type: 'paragraph', text: 'Situs web kami menggunakan cookie, penyimpanan lokal, skrip, dan teknologi serupa untuk mengoperasikan situs, mengingat bahasa dan tampilan, menjaga keamanan, menyediakan obrolan daring, memahami penggunaan, mendiagnosis masalah, dan meningkatkan kinerja. Beberapa teknologi disediakan pihak ketiga yang dapat menerima informasi teknis dan penggunaan.' },
        { type: 'paragraph', text: 'Jika diwajibkan hukum, teknologi non-esensial hanya digunakan setelah Anda memberikan persetujuan. Anda dapat mengubah pilihan melalui kontrol cookie kami, jika tersedia, atau pengaturan peramban. Memblokir beberapa teknologi dapat menyebabkan bagian situs atau layanan tidak berfungsi dengan baik.' },
        { type: 'paragraph', text: 'Informasi lebih lanjut tentang teknologi yang digunakan, penyedia, tujuan, dan durasinya dapat diberikan dalam Kebijakan Cookie terpisah.' },
      ],
    },
    {
      nav: 'Transfer internasional',
      title: 'Lokasi data dan transfer internasional',
      blocks: [
        { type: 'paragraph', text: 'Sistem manajemen hubungan pelanggan utama kami dan catatan pelanggan di dalamnya dihosting di Singapura. Karena klien dan penyedia layanan kami beroperasi secara internasional, informasi pribadi juga dapat diakses atau diproses di negara selain tempat tinggal Anda. Negara tersebut mungkin memiliki hukum perlindungan data yang berbeda.' },
        { type: 'paragraph', text: 'Bila diperlukan, kami menggunakan perlindungan kontrak, mekanisme transfer, kontrol akses, dan langkah perlindungan lain untuk melindungi informasi pribadi yang ditransfer secara internasional. Anda dapat menghubungi kami untuk informasi lebih lanjut tentang perlindungan yang relevan dengan informasi Anda.' },
      ],
    },
    {
      nav: 'Masa penyimpanan',
      title: 'Berapa lama kami menyimpan informasi pribadi',
      blocks: [
        { type: 'paragraph', text: 'Kami menyimpan informasi akun, verifikasi identitas, transaksi, dan kepatuhan terkait selama akun Anda tetap terbuka. Kami meninjau dan memperbarui informasi KYC sekurang-kurangnya setiap 12 bulan dan dapat melakukannya lebih sering bila diperlukan karena risiko, hukum, peraturan, atau perubahan keadaan Anda.' },
        { type: 'paragraph', text: 'Setelah akun ditutup, kami menyimpan informasi pribadi terkait selama 12 bulan. Jika hukum, persyaratan regulator, klaim hukum, sengketa, audit, atau penyelidikan resmi mewajibkan periode lebih lama, kami menyimpan informasi tersebut selama periode itu. Kewajiban penyimpanan hukum ini mengesampingkan periode 12 bulan.' },
        { type: 'paragraph', text: 'Jika informasi tidak lagi diperlukan, kami menghapus, menganonimkan, atau mengisolasinya dengan aman hingga penghapusan dapat dilakukan.' },
      ],
    },
    {
      nav: 'Keamanan',
      title: 'Cara kami melindungi informasi pribadi',
      blocks: [
        { type: 'paragraph', text: 'Kami menggunakan perlindungan administratif, teknis, dan fisik untuk melindungi informasi pribadi dari kehilangan, penyalahgunaan, akses tanpa izin, perubahan, pengungkapan, atau penghancuran yang tidak disengaja atau melanggar hukum. Langkah tersebut dapat mencakup kontrol akses, enkripsi bila sesuai, pemantauan sistem, pengujian keamanan, kewajiban kerahasiaan staf, dan kontrol penyedia layanan.' },
        { type: 'paragraph', text: 'Tidak ada situs web, transmisi, atau sistem penyimpanan yang sepenuhnya aman. Lindungi kredensial login Anda, gunakan perangkat dan jaringan yang aman, dan segera hubungi kami jika Anda mencurigai akses tanpa izin ke akun atau informasi pribadi Anda.' },
      ],
    },
    {
      nav: 'Hak Anda',
      title: 'Hak privasi Anda',
      blocks: [
        {
          type: 'list',
          intro: 'Bergantung pada tempat tinggal dan hukum yang berlaku, Anda mungkin berhak untuk:',
          items: [
            { text: 'Menanyakan apakah kami memproses informasi pribadi Anda dan meminta akses.' },
            { text: 'Meminta koreksi informasi yang tidak akurat atau tidak lengkap.' },
            { text: 'Meminta penghapusan informasi dalam keadaan tertentu.' },
            { text: 'Meminta pembatasan pemrosesan atau menolak pemrosesan tertentu.' },
            { text: 'Menerima informasi tertentu dalam format yang mudah dipindahkan.' },
            { text: 'Menarik persetujuan jika pemrosesan didasarkan pada persetujuan.' },
            { text: 'Menolak pemasaran langsung.' },
            { text: 'Meminta informasi tentang transfer internasional atau pengambilan keputusan otomatis, jika berlaku.' },
            { text: 'Mengajukan keluhan kepada kami atau otoritas privasi atau perlindungan data terkait.' },
          ],
        },
        { type: 'paragraph', text: 'Hak ini tidak bersifat mutlak. Misalnya, kami mungkin perlu menyimpan informasi untuk mematuhi kewajiban jasa keuangan, antipencucian uang, pajak, regulator, sengketa, atau hukum. Kami dapat meminta Anda memverifikasi identitas sebelum menindaklanjuti permintaan. Kami akan merespons dalam jangka waktu yang diwajibkan hukum dan menjelaskan alasan sah untuk menolak atau membatasi permintaan.' },
        { type: 'paragraph', text: 'Untuk menggunakan hak privasi, hubungi kami melalui detail pada bagian 16 dan cantumkan "Privacy Request" pada subjek. Jangan mengirim kata sandi atau dokumen identitas yang tidak diperlukan melalui email biasa.' },
      ],
    },
    {
      nav: 'Pemasaran',
      title: 'Komunikasi pemasaran',
      blocks: [
        { type: 'paragraph', text: 'Kami dapat mengirim informasi tentang produk, layanan, acara, atau promosi jika diizinkan hukum. Anda dapat berhenti berlangganan melalui opsi pada pesan pemasaran atau dengan menghubungi kami. Kami tetap dapat mengirim komunikasi layanan, akun, transaksi, keamanan, hukum, atau regulator yang diperlukan untuk hubungan kami dengan Anda.' },
      ],
    },
    {
      nav: 'Anak-anak',
      title: 'Anak-anak',
      blocks: [
        { type: 'paragraph', text: 'Situs web dan layanan kami tidak ditujukan kepada orang berusia di bawah 18 tahun dan kami tidak dengan sengaja membuka akun untuk mereka. Jika Anda meyakini seseorang di bawah 18 tahun telah memberikan informasi pribadi kepada kami, hubungi kami agar kami dapat menyelidiki dan mengambil tindakan yang sesuai.' },
      ],
    },
    {
      nav: 'Pihak ketiga',
      title: 'Situs web dan layanan pihak ketiga',
      blocks: [
        { type: 'paragraph', text: 'Situs web kami dapat memuat tautan atau konten dan layanan tertanam dari pihak ketiga. Pihak ketiga tersebut dapat mengumpulkan informasi pribadi berdasarkan pemberitahuan privasi mereka sendiri. Kami tidak bertanggung jawab atas praktik privasi mereka dan menganjurkan Anda membaca pemberitahuan tersebut sebelum memberikan informasi atau menggunakan layanan mereka.' },
      ],
    },
    {
      nav: 'Perubahan kebijakan',
      title: 'Perubahan kebijakan ini',
      blocks: [
        { type: 'paragraph', text: 'Kami dapat memperbarui Kebijakan Privasi ini untuk mencerminkan perubahan praktik, layanan, atau kewajiban hukum kami. Kami akan menerbitkan kebijakan yang direvisi pada halaman ini dan memperbarui tanggal berlaku. Jika diwajibkan hukum, kami akan memberikan pemberitahuan tambahan atau meminta persetujuan sebelum perubahan penting berlaku.' },
      ],
    },
    {
      nav: 'Hubungi kami',
      title: 'Kontak dan keluhan',
      blocks: [
        { type: 'paragraph', text: 'Pertanyaan, permintaan privasi, dan keluhan dapat dikirim kepada:' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: 'Email', addressLabel: 'Alamat terdaftar', address: registeredAddress },
        { type: 'paragraph', text: 'Gunakan subjek "Privacy Request" atau "Privacy Complaint". Sertakan informasi yang cukup agar kami memahami permintaan Anda, tetapi jangan mengirim kata sandi atau dokumen identitas yang tidak diperlukan melalui email biasa.' },
        { type: 'paragraph', text: 'Kami akan mengakui dan menyelidiki keluhan privasi serta merespons dalam jangka waktu yang diwajibkan hukum. Jika Anda tidak puas dengan respons kami, Anda mungkin berhak mengajukan keluhan kepada otoritas privasi atau perlindungan data di yurisdiksi Anda.' },
      ],
    },
  ],
)

const th = createPolicy(
  {
    eyebrow: 'กฎหมายและความเป็นส่วนตัว',
    title: 'นโยบายความเป็นส่วนตัว',
    intro: 'วิธีที่ KOS Markets Limited เก็บรวบรวม ใช้ จัดเก็บ และคุ้มครองข้อมูลส่วนบุคคล',
    effectiveDate: 'มีผลบังคับใช้วันที่ 16 กันยายน 2026',
  },
  'เนื้อหาในหน้านี้',
  [
    {
      nav: 'ขอบเขต',
      title: 'เราเป็นใครและขอบเขตของนโยบายนี้',
      blocks: [
        { type: 'paragraph', text: 'นโยบายความเป็นส่วนตัวนี้อธิบายวิธีที่ KOS Markets Limited เก็บรวบรวม ใช้ เปิดเผย จัดเก็บ และคุ้มครองข้อมูลส่วนบุคคล เมื่อคุณเข้าชม www.kosmarkets.com ติดต่อเรา สมัครหรือถือบัญชี ใช้พอร์ทัลลูกค้าหรือบริการที่เกี่ยวข้องกับการซื้อขายของเรา หรือมีปฏิสัมพันธ์กับเราด้วยวิธีอื่น' },
        { type: 'paragraph', text: 'ในนโยบายนี้ “KOS Markets” “เรา” และ “ของเรา” หมายถึง KOS Markets Limited ซึ่งจัดตั้งขึ้นในเซนต์ลูเซีย เลขทะเบียน 2026-00467 และมีที่อยู่จดทะเบียนที่ Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia โดย KOS Markets Limited เป็นผู้รับผิดชอบข้อมูลส่วนบุคคลที่เก็บรวบรวมผ่านเว็บไซต์ พอร์ทัลลูกค้า และบริการที่เกี่ยวข้องซึ่งอยู่ภายใต้นโยบายนี้' },
        { type: 'paragraph', text: 'นโยบายนี้ไม่ได้ใช้แทนประกาศความเป็นส่วนตัวสำหรับผลิตภัณฑ์ บริการ โปรโมชั่น หรือเขตอำนาจเฉพาะ หากประกาศเฉพาะขัดกับนโยบายนี้ ให้ใช้ประกาศเฉพาะนั้นกับการประมวลผลที่เกี่ยวข้อง' },
      ],
    },
    {
      nav: 'ข้อมูลที่เราเก็บรวบรวม',
      title: 'ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม',
      blocks: [
        {
          type: 'list',
          intro: 'ข้อมูลส่วนบุคคลที่เราเก็บรวบรวมขึ้นอยู่กับวิธีที่คุณติดต่อกับเรา และอาจรวมถึง:',
          items: [
            { label: 'ข้อมูลระบุตัวตน', text: ' เช่น ชื่อ วันเดือนปีเกิด สัญชาติ ลายมือชื่อ เอกสารประจำตัวที่ออกโดยรัฐบาล รูปถ่าย และข้อมูลที่จำเป็นต่อการยืนยันตัวตน' },
            { label: 'ข้อมูลติดต่อ', text: ' เช่น ที่อยู่พักอาศัยหรือที่อยู่ไปรษณีย์ อีเมล และหมายเลขโทรศัพท์' },
            { label: 'ข้อมูลบัญชีและโปรไฟล์', text: ' เช่น ข้อมูลเข้าสู่ระบบ ตัวระบุบัญชี ภาษา การตั้งค่าการติดต่อ และการจัดประเภทลูกค้า' },
            { label: 'ข้อมูลทางการเงินและธุรกรรม', text: ' เช่น ข้อมูลธนาคารหรือการชำระเงิน เงินฝาก การถอน ยอดคงเหลือ ประวัติธุรกรรม แหล่งที่มาของเงินทุน และข้อมูลฐานะการเงินเมื่อจำเป็น' },
            { label: 'ข้อมูลการซื้อขายและบริการ', text: ' เช่น กิจกรรมบัญชีซื้อขาย การใช้แพลตฟอร์ม คำสั่ง คำขอ ข้อร้องเรียน และบันทึกเกี่ยวกับบริการของเรา' },
            { label: 'ข้อมูลการปฏิบัติตามกฎ', text: ' เช่น ข้อมูลสำหรับการยืนยันตัวตน การตรวจสอบการฟอกเงิน การคัดกรองมาตรการคว่ำบาตร การป้องกันการทุจริต การประเมินความเหมาะสม และการรายงานต่อหน่วยงานกำกับ' },
            { label: 'การติดต่อสื่อสาร', text: ' เช่น อีเมล ข้อความแชตออนไลน์ โทรศัพท์ที่มีการบันทึก คำขอความช่วยเหลือ คำตอบแบบสำรวจ และการติดต่ออื่นกับเรา' },
            { label: 'ข้อมูลทางเทคนิคและการใช้งาน', text: ' เช่น ที่อยู่ IP ประเภทอุปกรณ์และเบราว์เซอร์ ระบบปฏิบัติการ ตัวระบุอุปกรณ์ หน้าอ้างอิง หน้าที่เข้าชม เวลาเข้าใช้ ตำแหน่งโดยประมาณจาก IP และข้อมูลความปลอดภัยหรือการวินิจฉัย' },
            { label: 'ข้อมูลการตลาด', text: ' เช่น การตั้งค่าการรับข่าวสารและข้อมูลการตอบสนองต่อข้อความหรือโปรโมชั่นของเรา' },
          ],
        },
        { type: 'paragraph', text: 'ข้อมูลบางประเภทอาจถือเป็นข้อมูลอ่อนไหวหรือได้รับความคุ้มครองทางกฎหมายเพิ่มเติม เราจะเก็บรวบรวมและใช้ข้อมูลดังกล่าวเฉพาะเมื่อจำเป็น กฎหมายอนุญาต และเมื่อจำเป็นต้องได้รับความยินยอมจากคุณ' },
      ],
    },
    {
      nav: 'วิธีเก็บรวบรวม',
      title: 'วิธีที่เราเก็บรวบรวมข้อมูลส่วนบุคคล',
      blocks: [
        {
          type: 'list',
          intro: 'เราเก็บรวบรวมข้อมูลส่วนบุคคล:',
          items: [
            { text: 'โดยตรงจากคุณเมื่อคุณเข้าชมเว็บไซต์ ติดต่อเรา ลงทะเบียน สมัครบัญชี ส่งเอกสาร ใช้บริการ เข้าร่วมโปรโมชั่น หรือติดต่อฝ่ายบริการลูกค้า' },
            { text: 'โดยอัตโนมัติเมื่อคุณใช้เว็บไซต์ พอร์ทัลลูกค้า หรือเทคโนโลยีที่เกี่ยวข้อง รวมถึงผ่านคุกกี้ ที่จัดเก็บข้อมูลในเครื่อง บันทึก และเทคโนโลยีที่คล้ายกัน' },
            { text: 'จากผู้ให้บริการ รวมถึง Sumsub และผู้ให้บริการด้านป้องกันการทุจริต คัดกรองมาตรการคว่ำบาตร การชำระเงิน ธนาคาร แพลตฟอร์มซื้อขาย โฮสติ้ง บริการลูกค้า และข้อมูล' },
            { text: 'จากทะเบียนสาธารณะ หน่วยงานกำกับดูแล หน่วยงานบังคับใช้กฎหมาย ฐานข้อมูลเครดิตหรือป้องกันการทุจริต และแหล่งที่ชอบด้วยกฎหมายอื่นเมื่อจำเป็นต่อการยืนยันหรือการปฏิบัติตามกฎ' },
          ],
        },
        { type: 'paragraph', text: 'หากคุณให้ข้อมูลส่วนบุคคลของบุคคลอื่น คุณต้องมีฐานกฎหมายและแจ้งบุคคลนั้นเกี่ยวกับนโยบายนี้เมื่อจำเป็น' },
        { type: 'paragraph', text: 'คุณอาจเลือกไม่ให้ข้อมูลที่ร้องขอ อย่างไรก็ตาม เราอาจไม่สามารถเปิดหรือดูแลบัญชี ประมวลผลธุรกรรม ตอบคำขอ หรือให้บริการบางอย่างได้ หากข้อมูลนั้นจำเป็นตามกฎหมาย ระเบียบ สัญญา การควบคุมความปลอดภัย หรือความจำเป็นในการดำเนินงาน' },
      ],
    },
    {
      nav: 'วิธีใช้ข้อมูล',
      title: 'วิธีและเหตุผลที่เราใช้ข้อมูลส่วนบุคคล',
      blocks: [
        {
          type: 'list',
          intro: 'เราอาจใช้ข้อมูลส่วนบุคคลเพื่อ:',
          items: [
            { text: 'ให้บริการ บริหาร และสนับสนุนเว็บไซต์ พอร์ทัลลูกค้า บัญชี ธุรกรรม และบริการอื่นที่คุณร้องขอ' },
            { text: 'ยืนยันตัวตนและประเมินว่าเราสามารถให้บริการแก่คุณได้หรือไม่' },
            { text: 'ดำเนินการตรวจสอบการฟอกเงิน การสนับสนุนทางการเงินแก่การก่อการร้าย มาตรการคว่ำบาตร การทุจริต และการปฏิบัติตามกฎอื่น' },
            { text: 'ประมวลผลเงินฝาก การถอน การชำระเงิน คำสั่งบัญชี และคำขอบริการ' },
            { text: 'ติดต่อเกี่ยวกับบัญชี ธุรกรรม ความปลอดภัย คำขอความช่วยเหลือ ข้อร้องเรียน และการเปลี่ยนแปลงบริการหรือข้อกำหนดทางกฎหมาย' },
            { text: 'คุ้มครองลูกค้า ระบบ พนักงาน สิทธิ และทรัพย์สินของเรา และตรวจสอบการทุจริต การใช้งานในทางที่ผิด เหตุการณ์ความปลอดภัย หรือกิจกรรมผิดกฎหมายที่สงสัย' },
            { text: 'ปฏิบัติตามหน้าที่ด้านกฎหมาย กฎระเบียบ การรายงาน การตรวจสอบ ภาษี การเก็บบันทึก และการบังคับใช้กฎหมาย' },
            { text: 'ก่อตั้ง ใช้ หรือปกป้องสิทธิเรียกร้องทางกฎหมาย และระงับข้อพิพาท' },
            { text: 'ติดตาม บำรุงรักษา แก้ปัญหา และปรับปรุงเว็บไซต์ ระบบ บริการ เนื้อหา และประสบการณ์ของลูกค้า' },
            { text: 'วางแผนธุรกิจ รายงาน ประกันคุณภาพ และวิเคราะห์สถิติโดยใช้ข้อมูลรวม หรือข้อมูลที่ไม่สามารถระบุตัวตนเมื่อทำได้' },
            { text: 'ส่งการสื่อสารทางการตลาดเมื่อกฎหมายอนุญาตและตามการตั้งค่าของคุณ' },
          ],
        },
        { type: 'paragraph', text: 'ตามกฎหมายที่ใช้บังคับ เราอาศัยฐานอย่างน้อยหนึ่งประการ ได้แก่ การปฏิบัติตามสัญญาหรือขั้นตอนที่คุณร้องขอก่อนทำสัญญา การปฏิบัติตามหน้าที่ทางกฎหมายหรือกฎระเบียบ ประโยชน์โดยชอบของเราหรือบุคคลที่สาม การคุ้มครองประโยชน์สำคัญของบุคคล และความยินยอมของคุณ หากอาศัยความยินยอม คุณถอนความยินยอมได้ทุกเมื่อ โดยไม่กระทบการประมวลผลก่อนถอน' },
      ],
    },
    {
      nav: 'การยืนยันตัวตน',
      title: 'การยืนยันตัวตนและภาพใบหน้า',
      blocks: [
        { type: 'paragraph', text: 'เราใช้ Sumsub เพื่อยืนยันตัวตนและตรวจสอบการปฏิบัติตามกฎที่เกี่ยวข้อง ในกระบวนการนี้ คุณอาจถูกขอให้ส่งเอกสารระบุตัวตน รูปถ่าย วิดีโอ หรือภาพเซลฟี หากใช้การยืนยันใบหน้า Sumsub อาจเปรียบเทียบภาพใบหน้ากับรูปในเอกสารและตรวจสอบความมีชีวิต Sumsub ประมวลผลข้อมูลแทนเราตามหน้าที่ตามสัญญาและกฎหมาย' },
        { type: 'paragraph', text: 'KOS Markets ไม่ได้สร้างหรือจัดเก็บแม่แบบข้อมูลชีวมิติแยกต่างหากในระบบของตน เรารับและเก็บผลการยืนยันและบันทึกที่จำเป็นต่อหน้าที่ด้านการปฏิบัติตามกฎ การป้องกันการทุจริต ความปลอดภัย ข้อพิพาท และการเก็บบันทึก หากกฎหมายถือข้อมูลยืนยันใบหน้าเป็นข้อมูลชีวมิติหรือข้อมูลอ่อนไหว เราจะแจ้งหรือขอความยินยอมเพิ่มเติมตามที่กฎหมายกำหนดในระหว่างการยืนยัน' },
      ],
    },
    {
      nav: 'การเปิดเผย',
      title: 'กรณีที่เราเปิดเผยข้อมูลส่วนบุคคล',
      blocks: [
        {
          type: 'list',
          intro: 'เราอาจเปิดเผยข้อมูลส่วนบุคคลแก่:',
          items: [
            { text: 'ผู้ให้บริการยืนยันตัวตน ป้องกันการฟอกเงิน คัดกรองมาตรการคว่ำบาตร ป้องกันการทุจริต และบริหารความเสี่ยง รวมถึง Sumsub' },
            { text: 'ธนาคาร ผู้ประมวลผลการชำระเงิน ผู้ให้บริการชำระเงิน ผู้รับฝากทรัพย์สิน และฝ่ายอื่นที่เกี่ยวข้องกับเงินฝาก การถอน หรือธุรกรรม' },
            { text: 'ผู้ให้บริการแพลตฟอร์มซื้อขาย ข้อมูลตลาด สภาพคล่อง เทคโนโลยี โทรคมนาคม โฮสติ้ง คลาวด์ ความปลอดภัยไซเบอร์ เว็บไซต์ การวิเคราะห์ บริการลูกค้า และการสื่อสาร รวมถึงผู้ให้บริการแชตออนไลน์' },
            { text: 'ที่ปรึกษาวิชาชีพและผู้สอบบัญชี รวมถึงผู้ให้บริการด้านกฎหมาย บัญชี การปฏิบัติตามกฎ ประกันภัย และที่ปรึกษา' },
            { text: 'หน่วยงานกำกับ ศาล หน่วยงานบังคับใช้กฎหมาย หน่วยงานภาษี องค์กรระงับข้อพิพาท และหน่วยงานรัฐอื่น เมื่อกฎหมายกำหนดหรืออนุญาต' },
            { text: 'ผู้ซื้อ นักลงทุน ผู้ให้กู้ ที่ปรึกษา หรือผู้สืบสิทธิ ในการควบรวม ปรับโครงสร้าง จัดหาเงิน ขาย หรือโอนธุรกิจหรือทรัพย์สินทั้งหมดหรือบางส่วน ภายใต้มาตรการรักษาความลับที่เหมาะสม' },
            { text: 'บุคคลอื่นตามคำสั่งหรือความยินยอมของคุณ หรือเมื่อกฎหมายอนุญาต' },
          ],
        },
        { type: 'paragraph', text: 'เรากำหนดให้ผู้ให้บริการคุ้มครองข้อมูลส่วนบุคคลและใช้เฉพาะเพื่อให้บริการแก่เราหรือตามที่กฎหมายอนุญาต เราไม่ขายข้อมูลส่วนบุคคลเพื่อเงิน หากกฎหมายให้ความหมาย “การขาย” หรือ “การแบ่งปัน” กว้างกว่านี้ เราจะให้ประกาศและตัวเลือกตามที่กฎหมายกำหนด' },
      ],
    },
    {
      nav: 'คุกกี้',
      title: 'คุกกี้และเทคโนโลยีที่คล้ายกัน',
      blocks: [
        { type: 'paragraph', text: 'เว็บไซต์ใช้คุกกี้ ที่จัดเก็บข้อมูลในเครื่อง สคริปต์ และเทคโนโลยีที่คล้ายกัน เพื่อดำเนินเว็บไซต์ จดจำภาษาและการแสดงผล รักษาความปลอดภัย ให้บริการแชต ทำความเข้าใจการใช้งาน วินิจฉัยปัญหา และปรับปรุงประสิทธิภาพ เทคโนโลยีบางอย่างมาจากบุคคลที่สามซึ่งอาจได้รับข้อมูลทางเทคนิคและการใช้งาน' },
        { type: 'paragraph', text: 'เมื่อกฎหมายกำหนด เทคโนโลยีที่ไม่จำเป็นจะใช้หลังได้รับความยินยอมเท่านั้น คุณเปลี่ยนตัวเลือกได้ผ่านการตั้งค่าคุกกี้ของเรา หากมี หรือการตั้งค่าเบราว์เซอร์ การปิดกั้นบางเทคโนโลยีอาจทำให้บางส่วนของเว็บไซต์หรือบริการทำงานไม่ถูกต้อง' },
        { type: 'paragraph', text: 'รายละเอียดเพิ่มเติมเกี่ยวกับเทคโนโลยี ผู้ให้บริการ วัตถุประสงค์ และระยะเวลา อาจระบุในนโยบายคุกกี้แยกต่างหาก' },
      ],
    },
    {
      nav: 'การโอนระหว่างประเทศ',
      title: 'สถานที่จัดเก็บข้อมูลและการโอนระหว่างประเทศ',
      blocks: [
        { type: 'paragraph', text: 'ระบบบริหารความสัมพันธ์ลูกค้าหลักและบันทึกลูกค้าในระบบดังกล่าวโฮสต์อยู่ในสิงคโปร์ เนื่องจากลูกค้าและผู้ให้บริการของเราดำเนินงานในหลายประเทศ ข้อมูลส่วนบุคคลอาจถูกเข้าถึงหรือประมวลผลในประเทศอื่นนอกเหนือจากประเทศที่คุณอาศัย ซึ่งอาจมีกฎหมายคุ้มครองข้อมูลแตกต่างกัน' },
        { type: 'paragraph', text: 'เมื่อจำเป็น เราใช้ความคุ้มครองตามสัญญา กลไกการโอน การควบคุมการเข้าถึง และมาตรการอื่นเพื่อคุ้มครองข้อมูลที่โอนไปต่างประเทศ คุณติดต่อเราเพื่อขอข้อมูลเพิ่มเติมเกี่ยวกับมาตรการที่เกี่ยวข้องได้' },
      ],
    },
    {
      nav: 'ระยะเวลาเก็บรักษา',
      title: 'ระยะเวลาที่เราเก็บข้อมูลส่วนบุคคล',
      blocks: [
        { type: 'paragraph', text: 'เราเก็บข้อมูลบัญชี การยืนยันตัวตน ธุรกรรม และการปฏิบัติตามกฎที่เกี่ยวข้องตราบเท่าที่บัญชียังเปิดอยู่ เราตรวจสอบและปรับปรุงข้อมูล KYC อย่างน้อยทุก 12 เดือน และอาจบ่อยกว่านั้นเมื่อความเสี่ยง กฎหมาย ระเบียบ หรือสถานการณ์ของคุณเปลี่ยนแปลง' },
        { type: 'paragraph', text: 'หลังปิดบัญชี เราเก็บข้อมูลส่วนบุคคลที่เกี่ยวข้องเป็นเวลา 12 เดือน หากกฎหมาย ข้อกำหนดของหน่วยงานกำกับ ข้อเรียกร้องทางกฎหมาย ข้อพิพาท การตรวจสอบ หรือการสอบสวนทางการกำหนดระยะเวลานานกว่า เราจะเก็บข้อมูลตามระยะเวลานั้น ข้อกำหนดการเก็บตามกฎหมายนี้มีผลเหนือระยะเวลา 12 เดือน' },
        { type: 'paragraph', text: 'เมื่อข้อมูลไม่จำเป็นอีกต่อไป เราจะลบ ทำให้ไม่ระบุตัวตน หรือแยกเก็บอย่างปลอดภัยจนกว่าจะลบได้' },
      ],
    },
    {
      nav: 'ความปลอดภัย',
      title: 'วิธีที่เราคุ้มครองข้อมูลส่วนบุคคล',
      blocks: [
        { type: 'paragraph', text: 'เราใช้มาตรการด้านการบริหาร เทคนิค และกายภาพ เพื่อคุ้มครองข้อมูลจากการสูญหาย การใช้ผิดวัตถุประสงค์ การเข้าถึง การแก้ไข การเปิดเผย หรือการทำลายโดยไม่ได้รับอนุญาต มาตรการอาจรวมถึงการควบคุมการเข้าถึง การเข้ารหัสเมื่อเหมาะสม การติดตามระบบ การทดสอบความปลอดภัย หน้าที่รักษาความลับของพนักงาน และการควบคุมผู้ให้บริการ' },
        { type: 'paragraph', text: 'ไม่มีเว็บไซต์ การส่งข้อมูล หรือระบบจัดเก็บใดปลอดภัยอย่างสมบูรณ์ คุณควรปกป้องข้อมูลเข้าสู่ระบบ ใช้อุปกรณ์และเครือข่ายที่ปลอดภัย และติดต่อเราทันทีหากสงสัยว่ามีการเข้าถึงบัญชีหรือข้อมูลโดยไม่ได้รับอนุญาต' },
      ],
    },
    {
      nav: 'สิทธิของคุณ',
      title: 'สิทธิด้านความเป็นส่วนตัวของคุณ',
      blocks: [
        {
          type: 'list',
          intro: 'ขึ้นอยู่กับที่อยู่อาศัยและกฎหมายที่ใช้บังคับ คุณอาจมีสิทธิ:',
          items: [
            { text: 'ถามว่าเราประมวลผลข้อมูลของคุณหรือไม่และขอเข้าถึงข้อมูล' },
            { text: 'ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่ครบถ้วน' },
            { text: 'ขอลบข้อมูลในบางกรณี' },
            { text: 'ขอจำกัดหรือคัดค้านการประมวลผลบางอย่าง' },
            { text: 'รับข้อมูลบางประเภทในรูปแบบที่โอนได้' },
            { text: 'ถอนความยินยอมเมื่อการประมวลผลอาศัยความยินยอม' },
            { text: 'ปฏิเสธการตลาดทางตรง' },
            { text: 'ขอข้อมูลเกี่ยวกับการโอนระหว่างประเทศหรือการตัดสินใจอัตโนมัติ หากเกี่ยวข้อง' },
            { text: 'ร้องเรียนต่อเราหรือหน่วยงานคุ้มครองความเป็นส่วนตัวหรือข้อมูลที่เกี่ยวข้อง' },
          ],
        },
        { type: 'paragraph', text: 'สิทธิเหล่านี้ไม่ใช่สิทธิเด็ดขาด ตัวอย่างเช่น เราอาจต้องเก็บข้อมูลเพื่อปฏิบัติตามหน้าที่ด้านบริการทางการเงิน การป้องกันการฟอกเงิน ภาษี กฎระเบียบ ข้อพิพาท หรือกฎหมาย เราอาจขอให้คุณยืนยันตัวตนก่อนดำเนินการ และจะตอบภายในระยะเวลาตามกฎหมายพร้อมอธิบายเหตุผลที่ชอบด้วยกฎหมายในการปฏิเสธหรือจำกัดคำขอ' },
        { type: 'paragraph', text: 'หากต้องการใช้สิทธิ โปรดติดต่อเราตามรายละเอียดในข้อ 16 และระบุ “Privacy Request” ในหัวเรื่อง อย่าส่งรหัสผ่านหรือเอกสารระบุตัวตนที่ไม่จำเป็นทางอีเมลทั่วไป' },
      ],
    },
    {
      nav: 'การตลาด',
      title: 'การสื่อสารทางการตลาด',
      blocks: [
        { type: 'paragraph', text: 'เราอาจส่งข้อมูลเกี่ยวกับผลิตภัณฑ์ บริการ กิจกรรม หรือโปรโมชั่นเมื่อกฎหมายอนุญาต คุณยกเลิกได้จากตัวเลือกในข้อความการตลาดหรือติดต่อเรา เรายังคงอาจส่งข้อความด้านบริการ บัญชี ธุรกรรม ความปลอดภัย กฎหมาย หรือกฎระเบียบที่จำเป็นต่อความสัมพันธ์กับคุณ' },
      ],
    },
    {
      nav: 'เด็ก',
      title: 'เด็ก',
      blocks: [
        { type: 'paragraph', text: 'เว็บไซต์และบริการของเราไม่ได้มุ่งหมายสำหรับผู้ที่มีอายุต่ำกว่า 18 ปี และเราไม่จงใจเปิดบัญชีให้บุคคลดังกล่าว หากเชื่อว่าบุคคลอายุต่ำกว่า 18 ปีให้ข้อมูลแก่เรา โปรดติดต่อเพื่อให้เราตรวจสอบและดำเนินการที่เหมาะสม' },
      ],
    },
    {
      nav: 'บุคคลที่สาม',
      title: 'เว็บไซต์และบริการของบุคคลที่สาม',
      blocks: [
        { type: 'paragraph', text: 'เว็บไซต์อาจมีลิงก์หรือเนื้อหาและบริการฝังจากบุคคลที่สาม ซึ่งอาจเก็บข้อมูลตามประกาศความเป็นส่วนตัวของตน เราไม่รับผิดชอบต่อแนวทางของบุคคลเหล่านั้น และขอแนะนำให้อ่านประกาศก่อนให้ข้อมูลหรือใช้บริการ' },
      ],
    },
    {
      nav: 'การเปลี่ยนแปลงนโยบาย',
      title: 'การเปลี่ยนแปลงนโยบายนี้',
      blocks: [
        { type: 'paragraph', text: 'เราอาจปรับปรุงนโยบายนี้เพื่อสะท้อนการเปลี่ยนแปลงแนวปฏิบัติ บริการ หรือหน้าที่ทางกฎหมาย โดยจะเผยแพร่ฉบับแก้ไขในหน้านี้และปรับวันที่มีผล เมื่อกฎหมายกำหนด เราจะแจ้งเพิ่มเติมหรือขอความยินยอมก่อนการเปลี่ยนแปลงสำคัญมีผล' },
      ],
    },
    {
      nav: 'ติดต่อเรา',
      title: 'การติดต่อและข้อร้องเรียน',
      blocks: [
        { type: 'paragraph', text: 'คำถาม คำขอด้านความเป็นส่วนตัว และข้อร้องเรียนส่งได้ที่:' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: 'อีเมล', addressLabel: 'ที่อยู่จดทะเบียน', address: registeredAddress },
        { type: 'paragraph', text: 'โปรดใช้หัวเรื่อง “Privacy Request” หรือ “Privacy Complaint” และให้ข้อมูลเพียงพอเพื่อให้เราเข้าใจคำขอ แต่อย่าส่งรหัสผ่านหรือเอกสารระบุตัวตนที่ไม่จำเป็นทางอีเมลทั่วไป' },
        { type: 'paragraph', text: 'เราจะยืนยันการรับและตรวจสอบข้อร้องเรียน และตอบภายในระยะเวลาตามกฎหมาย หากไม่พอใจกับคำตอบ คุณอาจมีสิทธิร้องเรียนต่อหน่วยงานความเป็นส่วนตัวหรือคุ้มครองข้อมูลในเขตอำนาจของคุณ' },
      ],
    },
  ],
)

const vi = createPolicy(
  {
    eyebrow: 'Pháp lý và quyền riêng tư',
    title: 'Chính sách Quyền riêng tư',
    intro: 'Cách KOS Markets Limited thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân.',
    effectiveDate: 'Có hiệu lực từ ngày 16 tháng 9 năm 2026',
  },
  'Nội dung trang này',
  [
    {
      nav: 'Phạm vi',
      title: 'Chúng tôi là ai và phạm vi của chính sách',
      blocks: [
        { type: 'paragraph', text: 'Chính sách Quyền riêng tư này giải thích cách KOS Markets Limited thu thập, sử dụng, tiết lộ, lưu trữ và bảo vệ thông tin cá nhân khi bạn truy cập www.kosmarkets.com, liên hệ với chúng tôi, đăng ký hoặc duy trì tài khoản, sử dụng cổng thông tin khách hàng hoặc các dịch vụ liên quan đến giao dịch, hay tương tác với chúng tôi theo cách khác.' },
        { type: 'paragraph', text: 'Trong chính sách này, “KOS Markets”, “chúng tôi” và “của chúng tôi” là KOS Markets Limited. KOS Markets Limited được thành lập tại Saint Lucia với số đăng ký 2026-00467 và có địa chỉ đăng ký tại Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia. KOS Markets Limited chịu trách nhiệm về thông tin cá nhân được thu thập qua trang web, cổng thông tin khách hàng và các dịch vụ liên quan thuộc phạm vi chính sách này.' },
        { type: 'paragraph', text: 'Chính sách này không thay thế bất kỳ thông báo quyền riêng tư nào dành cho sản phẩm, dịch vụ, chương trình khuyến mãi hoặc khu vực pháp lý cụ thể. Nếu một thông báo cụ thể mâu thuẫn với chính sách này, thông báo cụ thể đó sẽ áp dụng cho hoạt động xử lý liên quan.' },
      ],
    },
    {
      nav: 'Thông tin thu thập',
      title: 'Thông tin cá nhân chúng tôi thu thập',
      blocks: [
        {
          type: 'list',
          intro: 'Thông tin được thu thập phụ thuộc vào cách bạn tương tác với chúng tôi và có thể bao gồm:',
          items: [
            { label: 'Thông tin nhận dạng', text: ', gồm họ tên, ngày sinh, quốc tịch, chữ ký, giấy tờ tùy thân do chính phủ cấp, ảnh và thông tin cần thiết để xác minh danh tính.' },
            { label: 'Thông tin liên hệ', text: ', gồm địa chỉ cư trú hoặc nhận thư, địa chỉ email và số điện thoại.' },
            { label: 'Thông tin tài khoản và hồ sơ', text: ', gồm thông tin đăng nhập, mã nhận dạng tài khoản, ngôn ngữ, tùy chọn liên lạc và phân loại khách hàng.' },
            { label: 'Thông tin tài chính và giao dịch', text: ', gồm thông tin ngân hàng hoặc thanh toán, tiền nạp, tiền rút, số dư, lịch sử giao dịch, nguồn tiền và khi cần, thông tin về tình hình tài chính.' },
            { label: 'Thông tin giao dịch và dịch vụ', text: ', gồm hoạt động tài khoản giao dịch, việc sử dụng nền tảng, chỉ thị, yêu cầu, khiếu nại và hồ sơ liên quan đến dịch vụ.' },
            { label: 'Thông tin tuân thủ', text: ', gồm thông tin dùng để xác minh danh tính, kiểm tra chống rửa tiền, sàng lọc trừng phạt, phòng chống gian lận, đánh giá mức độ phù hợp và báo cáo pháp lý.' },
            { label: 'Thông tin liên lạc', text: ', gồm email, tin nhắn trò chuyện trực tuyến, cuộc gọi được ghi âm nếu có, yêu cầu hỗ trợ, phản hồi khảo sát và các trao đổi khác.' },
            { label: 'Thông tin kỹ thuật và sử dụng', text: ', gồm địa chỉ IP, loại thiết bị và trình duyệt, hệ điều hành, mã nhận dạng thiết bị, trang giới thiệu, trang đã xem, thời gian truy cập, vị trí gần đúng từ IP và dữ liệu bảo mật hoặc chẩn đoán.' },
            { label: 'Thông tin tiếp thị', text: ', gồm tùy chọn nhận thông tin và dữ liệu về tương tác của bạn với thông điệp hoặc chương trình khuyến mãi của chúng tôi.' },
          ],
        },
        { type: 'paragraph', text: 'Một số thông tin có thể được coi là nhạy cảm hoặc được bảo vệ pháp lý bổ sung. Chúng tôi chỉ thu thập và sử dụng thông tin đó khi cần thiết, được pháp luật cho phép và, nếu được yêu cầu, có sự đồng ý của bạn.' },
      ],
    },
    {
      nav: 'Cách thu thập',
      title: 'Cách chúng tôi thu thập thông tin cá nhân',
      blocks: [
        {
          type: 'list',
          intro: 'Chúng tôi thu thập thông tin cá nhân:',
          items: [
            { text: 'Trực tiếp từ bạn khi bạn truy cập trang web, liên hệ, đăng ký, mở tài khoản, gửi tài liệu, sử dụng dịch vụ, tham gia chương trình khuyến mãi hoặc liên hệ bộ phận hỗ trợ.' },
            { text: 'Tự động khi bạn sử dụng trang web, cổng khách hàng hoặc công nghệ liên quan, bao gồm qua cookie, bộ nhớ cục bộ, nhật ký và công nghệ tương tự.' },
            { text: 'Từ nhà cung cấp dịch vụ, gồm Sumsub và các nhà cung cấp phòng chống gian lận, sàng lọc trừng phạt, thanh toán, ngân hàng, nền tảng giao dịch, lưu trữ, hỗ trợ khách hàng và dữ liệu.' },
            { text: 'Từ sổ đăng ký công khai, cơ quan quản lý, cơ quan thực thi pháp luật, cơ sở dữ liệu tín dụng hoặc phòng chống gian lận và nguồn hợp pháp khác khi cần để xác minh hoặc tuân thủ.' },
          ],
        },
        { type: 'paragraph', text: 'Nếu cung cấp thông tin cá nhân của người khác, bạn phải có căn cứ hợp pháp và, khi cần, thông báo cho người đó về chính sách này.' },
        { type: 'paragraph', text: 'Bạn có thể không cung cấp thông tin được yêu cầu. Tuy nhiên, chúng tôi có thể không thể mở hoặc duy trì tài khoản, xử lý giao dịch, trả lời yêu cầu hoặc cung cấp một số dịch vụ khi thông tin đó cần thiết theo luật, quy định, hợp đồng, kiểm soát bảo mật hoặc nhu cầu vận hành.' },
      ],
    },
    {
      nav: 'Cách sử dụng',
      title: 'Cách thức và lý do sử dụng thông tin cá nhân',
      blocks: [
        {
          type: 'list',
          intro: 'Chúng tôi có thể sử dụng thông tin cá nhân để:',
          items: [
            { text: 'Cung cấp, quản trị và hỗ trợ trang web, cổng khách hàng, tài khoản, giao dịch và các dịch vụ khác mà bạn yêu cầu.' },
            { text: 'Xác minh danh tính và đánh giá liệu chúng tôi có thể cung cấp dịch vụ cho bạn hay không.' },
            { text: 'Thực hiện kiểm tra chống rửa tiền, chống tài trợ khủng bố, trừng phạt, gian lận và tuân thủ khác.' },
            { text: 'Xử lý tiền nạp, tiền rút, thanh toán, chỉ thị tài khoản và yêu cầu dịch vụ.' },
            { text: 'Trao đổi về tài khoản, giao dịch, bảo mật, yêu cầu hỗ trợ, khiếu nại và thay đổi đối với dịch vụ hoặc điều khoản pháp lý.' },
            { text: 'Bảo vệ khách hàng, hệ thống, nhân viên, quyền và tài sản của chúng tôi, đồng thời điều tra gian lận, lạm dụng, sự cố bảo mật hoặc hoạt động bất hợp pháp bị nghi ngờ.' },
            { text: 'Đáp ứng nghĩa vụ pháp luật, quản lý, báo cáo, kiểm toán, thuế, lưu giữ hồ sơ và thực thi pháp luật.' },
            { text: 'Thiết lập, thực thi hoặc bảo vệ yêu cầu pháp lý và giải quyết tranh chấp.' },
            { text: 'Giám sát, duy trì, khắc phục và cải thiện trang web, hệ thống, dịch vụ, nội dung và trải nghiệm khách hàng.' },
            { text: 'Lập kế hoạch kinh doanh, báo cáo, đảm bảo chất lượng và phân tích thống kê bằng thông tin tổng hợp hoặc đã khử định danh khi có thể.' },
            { text: 'Gửi thông tin tiếp thị khi pháp luật cho phép và phù hợp với tùy chọn của bạn.' },
          ],
        },
        { type: 'paragraph', text: 'Tùy luật áp dụng, chúng tôi dựa vào một hoặc nhiều căn cứ: thực hiện hợp đồng hoặc các bước theo yêu cầu của bạn trước khi ký hợp đồng; tuân thủ nghĩa vụ pháp luật hoặc quản lý; lợi ích hợp pháp của chúng tôi hoặc bên thứ ba; bảo vệ lợi ích sống còn của một người; và sự đồng ý của bạn. Khi dựa vào sự đồng ý, bạn có thể rút lại bất kỳ lúc nào nhưng không ảnh hưởng đến hoạt động xử lý trước khi rút.' },
      ],
    },
    {
      nav: 'Xác minh danh tính',
      title: 'Xác minh danh tính và hình ảnh khuôn mặt',
      blocks: [
        { type: 'paragraph', text: 'Chúng tôi sử dụng Sumsub để xác minh danh tính và kiểm tra tuân thủ liên quan. Bạn có thể được yêu cầu cung cấp giấy tờ tùy thân, ảnh, video hoặc ảnh selfie. Khi dùng xác minh khuôn mặt, Sumsub có thể so sánh hình ảnh khuôn mặt với ảnh trên giấy tờ và thực hiện kiểm tra tính sống. Sumsub xử lý thông tin thay mặt chúng tôi theo nghĩa vụ hợp đồng và pháp luật.' },
        { type: 'paragraph', text: 'KOS Markets không độc lập tạo hoặc lưu trữ mẫu sinh trắc học trong hệ thống của mình. Chúng tôi nhận và lưu kết quả xác minh cùng hồ sơ cần thiết để đáp ứng nghĩa vụ tuân thủ, phòng chống gian lận, bảo mật, tranh chấp và lưu giữ hồ sơ. Khi pháp luật coi thông tin xác minh khuôn mặt là dữ liệu sinh trắc học hoặc nhạy cảm, thông báo hoặc sự đồng ý bổ sung theo yêu cầu sẽ được cung cấp trong quá trình xác minh.' },
      ],
    },
    {
      nav: 'Tiết lộ',
      title: 'Khi chúng tôi tiết lộ thông tin cá nhân',
      blocks: [
        {
          type: 'list',
          intro: 'Chúng tôi có thể tiết lộ thông tin cá nhân cho:',
          items: [
            { text: 'Nhà cung cấp xác minh danh tính, chống rửa tiền, sàng lọc trừng phạt, phòng chống gian lận và quản lý rủi ro, gồm Sumsub.' },
            { text: 'Ngân hàng, đơn vị xử lý thanh toán, nhà cung cấp thanh toán, bên lưu ký và các bên tham gia tiền nạp, tiền rút hoặc giao dịch.' },
            { text: 'Nhà cung cấp nền tảng giao dịch, dữ liệu thị trường, thanh khoản, công nghệ, viễn thông, lưu trữ, đám mây, an ninh mạng, trang web, phân tích, hỗ trợ và truyền thông, gồm dịch vụ trò chuyện trực tuyến.' },
            { text: 'Cố vấn chuyên môn và kiểm toán viên, gồm nhà cung cấp pháp lý, kế toán, tuân thủ, bảo hiểm và tư vấn.' },
            { text: 'Cơ quan quản lý, tòa án, cơ quan thực thi pháp luật, cơ quan thuế, cơ quan giải quyết tranh chấp và cơ quan công quyền khác khi luật yêu cầu hoặc cho phép.' },
            { text: 'Người mua, nhà đầu tư, bên cho vay, cố vấn hoặc bên kế nhiệm liên quan đến việc sáp nhập, tái tổ chức, tài trợ, bán hoặc chuyển giao toàn bộ hay một phần doanh nghiệp hoặc tài sản, với biện pháp bảo mật phù hợp.' },
            { text: 'Người khác khi bạn chỉ đạo hoặc đồng ý, hoặc khi việc tiết lộ được pháp luật cho phép.' },
          ],
        },
        { type: 'paragraph', text: 'Chúng tôi yêu cầu nhà cung cấp bảo vệ thông tin và chỉ sử dụng cho dịch vụ cung cấp cho chúng tôi hoặc theo luật. Chúng tôi không bán thông tin cá nhân để lấy tiền. Nếu luật định nghĩa “bán” hoặc “chia sẻ” rộng hơn, chúng tôi sẽ cung cấp thông báo và lựa chọn theo yêu cầu.' },
      ],
    },
    {
      nav: 'Cookie',
      title: 'Cookie và công nghệ tương tự',
      blocks: [
        { type: 'paragraph', text: 'Trang web sử dụng cookie, bộ nhớ cục bộ, tập lệnh và công nghệ tương tự để vận hành, ghi nhớ ngôn ngữ và hiển thị, duy trì bảo mật, cung cấp trò chuyện, hiểu cách sử dụng, chẩn đoán lỗi và cải thiện hiệu suất. Một số công nghệ do bên thứ ba cung cấp và có thể cho phép họ nhận thông tin kỹ thuật và sử dụng.' },
        { type: 'paragraph', text: 'Khi luật yêu cầu, công nghệ không thiết yếu chỉ được sử dụng sau khi bạn đồng ý. Bạn có thể thay đổi lựa chọn qua công cụ cookie của chúng tôi, nếu có, hoặc cài đặt trình duyệt. Chặn một số công nghệ có thể khiến một phần trang web hoặc dịch vụ không hoạt động đúng.' },
        { type: 'paragraph', text: 'Thông tin thêm về công nghệ, nhà cung cấp, mục đích và thời hạn có thể được nêu trong Chính sách Cookie riêng.' },
      ],
    },
    {
      nav: 'Chuyển dữ liệu quốc tế',
      title: 'Vị trí dữ liệu và chuyển dữ liệu quốc tế',
      blocks: [
        { type: 'paragraph', text: 'Hệ thống quản lý quan hệ khách hàng chính và hồ sơ khách hàng trong hệ thống được lưu trữ tại Singapore. Vì khách hàng và nhà cung cấp hoạt động quốc tế, thông tin cá nhân cũng có thể được truy cập hoặc xử lý tại quốc gia khác với nơi bạn cư trú. Các quốc gia đó có thể có luật bảo vệ dữ liệu khác nhau.' },
        { type: 'paragraph', text: 'Khi cần, chúng tôi sử dụng biện pháp bảo vệ theo hợp đồng, cơ chế chuyển dữ liệu, kiểm soát truy cập và biện pháp khác để bảo vệ thông tin được chuyển quốc tế. Bạn có thể liên hệ để biết thêm về biện pháp liên quan đến thông tin của mình.' },
      ],
    },
    {
      nav: 'Thời hạn lưu giữ',
      title: 'Thời gian lưu giữ thông tin cá nhân',
      blocks: [
        { type: 'paragraph', text: 'Chúng tôi lưu thông tin tài khoản, xác minh danh tính, giao dịch và tuân thủ liên quan trong khi tài khoản còn mở. Chúng tôi rà soát và cập nhật thông tin KYC ít nhất mỗi 12 tháng và có thể thường xuyên hơn nếu rủi ro, luật, quy định hoặc hoàn cảnh của bạn thay đổi.' },
        { type: 'paragraph', text: 'Sau khi đóng tài khoản, chúng tôi lưu thông tin liên quan trong 12 tháng. Nếu luật, yêu cầu quản lý, khiếu kiện pháp lý, tranh chấp, kiểm toán hoặc điều tra chính thức yêu cầu lâu hơn, chúng tôi lưu trong thời hạn đó. Yêu cầu lưu giữ theo luật này được ưu tiên hơn thời hạn 12 tháng.' },
        { type: 'paragraph', text: 'Khi không còn cần thiết, chúng tôi xóa, ẩn danh hoặc cách ly an toàn thông tin cho đến khi có thể xóa.' },
      ],
    },
    {
      nav: 'Bảo mật',
      title: 'Cách chúng tôi bảo vệ thông tin cá nhân',
      blocks: [
        { type: 'paragraph', text: 'Chúng tôi sử dụng biện pháp hành chính, kỹ thuật và vật lý để bảo vệ thông tin khỏi mất mát, lạm dụng, truy cập trái phép, thay đổi, tiết lộ hoặc phá hủy do vô ý hoặc trái pháp luật. Các biện pháp có thể gồm kiểm soát truy cập, mã hóa khi phù hợp, giám sát hệ thống, kiểm tra bảo mật, nghĩa vụ bảo mật của nhân viên và kiểm soát nhà cung cấp.' },
        { type: 'paragraph', text: 'Không trang web, đường truyền hoặc hệ thống lưu trữ nào hoàn toàn an toàn. Hãy bảo vệ thông tin đăng nhập, sử dụng thiết bị và mạng an toàn, đồng thời liên hệ ngay nếu nghi ngờ có truy cập trái phép vào tài khoản hoặc thông tin cá nhân.' },
      ],
    },
    {
      nav: 'Quyền của bạn',
      title: 'Quyền riêng tư của bạn',
      blocks: [
        {
          type: 'list',
          intro: 'Tùy nơi cư trú và luật áp dụng, bạn có thể có quyền:',
          items: [
            { text: 'Hỏi liệu chúng tôi có xử lý thông tin của bạn và yêu cầu truy cập.' },
            { text: 'Yêu cầu sửa thông tin không chính xác hoặc không đầy đủ.' },
            { text: 'Yêu cầu xóa thông tin trong một số trường hợp.' },
            { text: 'Yêu cầu hạn chế hoặc phản đối một số hoạt động xử lý.' },
            { text: 'Nhận một số thông tin ở định dạng có thể chuyển giao.' },
            { text: 'Rút lại sự đồng ý nếu việc xử lý dựa trên đồng ý.' },
            { text: 'Từ chối tiếp thị trực tiếp.' },
            { text: 'Yêu cầu thông tin về chuyển dữ liệu quốc tế hoặc quyết định tự động, nếu áp dụng.' },
            { text: 'Khiếu nại với chúng tôi hoặc cơ quan quyền riêng tư hay bảo vệ dữ liệu liên quan.' },
          ],
        },
        { type: 'paragraph', text: 'Các quyền này không tuyệt đối. Ví dụ, chúng tôi có thể cần lưu thông tin để tuân thủ nghĩa vụ dịch vụ tài chính, chống rửa tiền, thuế, quản lý, tranh chấp hoặc pháp luật. Chúng tôi có thể yêu cầu xác minh danh tính trước khi xử lý. Chúng tôi sẽ phản hồi trong thời hạn luật định và giải thích lý do hợp pháp để từ chối hoặc giới hạn yêu cầu.' },
        { type: 'paragraph', text: 'Để thực hiện quyền, hãy liên hệ theo mục 16 và ghi “Privacy Request” trong tiêu đề. Không gửi mật khẩu hoặc giấy tờ tùy thân không cần thiết qua email thông thường.' },
      ],
    },
    {
      nav: 'Tiếp thị',
      title: 'Thông tin tiếp thị',
      blocks: [
        { type: 'paragraph', text: 'Chúng tôi có thể gửi thông tin về sản phẩm, dịch vụ, sự kiện hoặc khuyến mãi khi pháp luật cho phép. Bạn có thể hủy đăng ký trong thông điệp tiếp thị hoặc liên hệ với chúng tôi. Chúng tôi vẫn có thể gửi thông tin về dịch vụ, tài khoản, giao dịch, bảo mật, pháp lý hoặc quản lý cần thiết cho quan hệ với bạn.' },
      ],
    },
    {
      nav: 'Trẻ em',
      title: 'Trẻ em',
      blocks: [
        { type: 'paragraph', text: 'Trang web và dịch vụ không dành cho người dưới 18 tuổi và chúng tôi không cố ý mở tài khoản cho họ. Nếu bạn cho rằng người dưới 18 tuổi đã cung cấp thông tin cho chúng tôi, hãy liên hệ để chúng tôi điều tra và thực hiện hành động phù hợp.' },
      ],
    },
    {
      nav: 'Bên thứ ba',
      title: 'Trang web và dịch vụ của bên thứ ba',
      blocks: [
        { type: 'paragraph', text: 'Trang web có thể chứa liên kết hoặc nội dung và dịch vụ nhúng của bên thứ ba. Họ có thể thu thập thông tin theo thông báo quyền riêng tư riêng. Chúng tôi không chịu trách nhiệm về thông lệ của họ và khuyến nghị bạn đọc thông báo trước khi cung cấp thông tin hoặc sử dụng dịch vụ.' },
      ],
    },
    {
      nav: 'Thay đổi chính sách',
      title: 'Thay đổi đối với chính sách này',
      blocks: [
        { type: 'paragraph', text: 'Chúng tôi có thể cập nhật chính sách để phản ánh thay đổi trong thông lệ, dịch vụ hoặc nghĩa vụ pháp lý. Bản sửa đổi sẽ được đăng tại đây và cập nhật ngày hiệu lực. Khi luật yêu cầu, chúng tôi sẽ thông báo bổ sung hoặc xin sự đồng ý trước khi thay đổi quan trọng có hiệu lực.' },
      ],
    },
    {
      nav: 'Liên hệ',
      title: 'Liên hệ và khiếu nại',
      blocks: [
        { type: 'paragraph', text: 'Câu hỏi, yêu cầu quyền riêng tư và khiếu nại có thể gửi đến:' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: 'Email', addressLabel: 'Địa chỉ đăng ký', address: registeredAddress },
        { type: 'paragraph', text: 'Vui lòng dùng tiêu đề “Privacy Request” hoặc “Privacy Complaint”. Cung cấp đủ thông tin để chúng tôi hiểu yêu cầu, nhưng không gửi mật khẩu hoặc giấy tờ tùy thân không cần thiết qua email thông thường.' },
        { type: 'paragraph', text: 'Chúng tôi sẽ xác nhận, điều tra khiếu nại và phản hồi trong thời hạn luật định. Nếu không hài lòng với phản hồi, bạn có thể có quyền khiếu nại với cơ quan quyền riêng tư hoặc bảo vệ dữ liệu tại khu vực của mình.' },
      ],
    },
  ],
)

const ar = createPolicy(
  {
    eyebrow: 'الشؤون القانونية والخصوصية',
    title: 'سياسة الخصوصية',
    intro: 'كيفية جمع KOS Markets Limited للمعلومات الشخصية واستخدامها وتخزينها وحمايتها.',
    effectiveDate: 'تسري اعتباراً من 16 سبتمبر 2026',
  },
  'محتويات هذه الصفحة',
  [
    {
      nav: 'النطاق',
      title: 'من نحن ونطاق هذه السياسة',
      blocks: [
        { type: 'paragraph', text: 'توضح سياسة الخصوصية هذه كيفية قيام KOS Markets Limited بجمع المعلومات الشخصية واستخدامها والإفصاح عنها وتخزينها وحمايتها عند زيارتك لموقع www.kosmarkets.com أو تواصلك معنا أو تقدمك بطلب لفتح حساب أو احتفاظك بحساب أو استخدامك لبوابة العملاء أو الخدمات المتعلقة بالتداول أو تفاعلك معنا بأي طريقة أخرى.' },
        { type: 'paragraph', text: 'تشير عبارات "KOS Markets" و"نحن" و"لنا" في هذه السياسة إلى KOS Markets Limited. تأسست KOS Markets Limited في سانت لوسيا تحت رقم التسجيل 2026-00467، وعنوانها المسجل هو Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia. تتحمل KOS Markets Limited مسؤولية المعلومات الشخصية التي تُجمع عبر الموقع وبوابة العملاء والخدمات ذات الصلة المشمولة بهذه السياسة.' },
        { type: 'paragraph', text: 'لا تحل هذه السياسة محل أي إشعار خصوصية يُقدم لمنتج أو خدمة أو عرض ترويجي أو ولاية قضائية محددة. وإذا تعارض إشعار محدد مع هذه السياسة، يُطبق ذلك الإشعار على عملية المعالجة المعنية.' },
      ],
    },
    {
      nav: 'المعلومات التي نجمعها',
      title: 'المعلومات الشخصية التي نجمعها',
      blocks: [
        {
          type: 'list',
          intro: 'تعتمد المعلومات الشخصية التي نجمعها على طريقة تفاعلك معنا، وقد تشمل:',
          items: [
            { label: 'معلومات الهوية', text: '، بما في ذلك الاسم وتاريخ الميلاد والجنسية والتوقيع ووثائق الهوية الصادرة عن الجهات الحكومية والصور والمعلومات اللازمة للتحقق من هويتك.' },
            { label: 'معلومات الاتصال', text: '، بما في ذلك عنوان السكن أو العنوان البريدي وعنوان البريد الإلكتروني ورقم الهاتف.' },
            { label: 'معلومات الحساب والملف الشخصي', text: '، بما في ذلك بيانات تسجيل الدخول ومعرّفات الحساب واللغة وتفضيلات التواصل وتصنيف العميل.' },
            { label: 'المعلومات المالية ومعلومات المعاملات', text: '، بما في ذلك البيانات المصرفية أو بيانات الدفع والإيداعات والسحوبات والأرصدة وسجل المعاملات ومصدر الأموال ومعلومات وضعك المالي عند الحاجة.' },
            { label: 'معلومات التداول والخدمات', text: '، بما في ذلك نشاط حساب التداول واستخدام المنصة والتعليمات والطلبات والشكاوى والسجلات المتعلقة بالخدمات التي نقدمها.' },
            { label: 'معلومات الامتثال', text: '، بما في ذلك المعلومات المستخدمة للتحقق من الهوية ومكافحة غسل الأموال وفحص العقوبات ومنع الاحتيال وتقييم الملاءمة أو المناسبة والتقارير التنظيمية.' },
            { label: 'المراسلات', text: '، بما في ذلك رسائل البريد الإلكتروني ورسائل الدردشة عبر الإنترنت والمكالمات الهاتفية عند تسجيلها وطلبات الدعم وردود الاستبيانات والمراسلات الأخرى معنا.' },
            { label: 'المعلومات التقنية ومعلومات الاستخدام', text: '، بما في ذلك عنوان IP ونوع الجهاز والمتصفح ونظام التشغيل ومعرّفات الجهاز والصفحات المُحيلة والصفحات التي تمت زيارتها وأوقات الوصول والموقع التقريبي المستنتج من عنوان IP وبيانات الأمان أو التشخيص.' },
            { label: 'معلومات التسويق', text: '، بما في ذلك تفضيلات تلقي المراسلات ومعلومات تفاعلك مع رسائلنا أو عروضنا الترويجية.' },
          ],
        },
        { type: 'paragraph', text: 'قد تُعد بعض المعلومات حساسة أو تخضع لحماية قانونية إضافية. ولا نجمع هذه المعلومات أو نستخدمها إلا عند الضرورة وبما يسمح به القانون، وبعد الحصول على موافقتك عند اشتراطها.' },
      ],
    },
    {
      nav: 'كيفية جمعها',
      title: 'كيفية جمع المعلومات الشخصية',
      blocks: [
        {
          type: 'list',
          intro: 'نجمع المعلومات الشخصية:',
          items: [
            { text: 'منك مباشرةً عند زيارة الموقع أو الاتصال بنا أو التسجيل أو طلب فتح حساب أو تقديم المستندات أو استخدام خدماتنا أو المشاركة في عرض ترويجي أو التواصل مع دعم العملاء.' },
            { text: 'تلقائياً عند استخدام موقعنا أو بوابة العملاء أو التقنيات ذات الصلة، بما في ذلك من خلال ملفات تعريف الارتباط والتخزين المحلي والسجلات والتقنيات المشابهة.' },
            { text: 'من مزودي الخدمات، بما في ذلك Sumsub ومزودو خدمات منع الاحتيال وفحص العقوبات والدفع والخدمات المصرفية ومنصات التداول والاستضافة ودعم العملاء والبيانات.' },
            { text: 'من السجلات العامة والجهات التنظيمية وأجهزة إنفاذ القانون وقواعد بيانات الائتمان أو منع الاحتيال والمصادر القانونية الأخرى عند الحاجة للتحقق أو الامتثال.' },
          ],
        },
        { type: 'paragraph', text: 'إذا زودتنا بمعلومات شخصية تخص شخصاً آخر، فيجب أن يكون لديك أساس قانوني لذلك، وأن تُبلّغ ذلك الشخص بهذه السياسة عند الحاجة.' },
        { type: 'paragraph', text: 'يمكنك اختيار عدم تقديم المعلومات المطلوبة. ومع ذلك، قد يتعذر علينا فتح حساب أو إبقاؤه أو معالجة معاملة أو الرد على طلب أو تقديم بعض الخدمات عندما تكون المعلومات مطلوبة بموجب القانون أو اللوائح أو العقد أو ضوابط الأمان أو الضرورة التشغيلية.' },
      ],
    },
    {
      nav: 'كيفية استخدامها',
      title: 'كيفية استخدام المعلومات الشخصية وأسباب ذلك',
      blocks: [
        {
          type: 'list',
          intro: 'قد نستخدم المعلومات الشخصية من أجل:',
          items: [
            { text: 'تقديم الموقع وبوابة العملاء والحسابات والمعاملات والخدمات الأخرى التي تطلبها وإدارتها ودعمها.' },
            { text: 'التحقق من هويتك وتقييم ما إذا كان بإمكاننا تقديم الخدمات لك.' },
            { text: 'إجراء فحوص مكافحة غسل الأموال وتمويل الإرهاب والعقوبات والاحتيال وغيرها من فحوص الامتثال.' },
            { text: 'معالجة الإيداعات والسحوبات والمدفوعات وتعليمات الحساب وطلبات الخدمة.' },
            { text: 'التواصل معك بشأن حسابك ومعاملاتك والأمان وطلبات الدعم والشكاوى والتغييرات في خدماتنا أو شروطنا القانونية.' },
            { text: 'حماية عملائنا وأنظمتنا وموظفينا وحقوقنا وممتلكاتنا، والتحقيق في الاحتيال أو سوء الاستخدام أو الحوادث الأمنية أو الأنشطة غير القانونية المشتبه بها.' },
            { text: 'الوفاء بالالتزامات القانونية والتنظيمية ومتطلبات الإبلاغ والتدقيق والضرائب وحفظ السجلات وإنفاذ القانون.' },
            { text: 'إقامة الدعاوى القانونية أو ممارستها أو الدفاع عنها وتسوية المنازعات.' },
            { text: 'مراقبة موقعنا وأنظمتنا وخدماتنا ومحتوانا وتجربة العملاء وصيانتها واستكشاف مشكلاتها وتحسينها.' },
            { text: 'إجراء تخطيط الأعمال وإعداد التقارير وضمان الجودة والتحليل الإحصائي باستخدام معلومات مجمعة أو منزوعة الهوية حيثما أمكن.' },
            { text: 'إرسال مراسلات تسويقية عندما يسمح القانون ووفقاً لتفضيلاتك.' },
          ],
        },
        { type: 'paragraph', text: 'اعتماداً على القانون المعمول به، نستند إلى أساس واحد أو أكثر من الأسس التالية: تنفيذ عقد أو اتخاذ خطوات بناءً على طلبك قبل إبرامه؛ الامتثال لالتزام قانوني أو تنظيمي؛ مصالحنا المشروعة أو مصالح طرف ثالث؛ حماية المصالح الحيوية لشخص؛ وموافقتك. وعندما نعتمد على الموافقة، يمكنك سحبها في أي وقت، دون أن يؤثر ذلك في المعالجة التي تمت قبل السحب.' },
      ],
    },
    {
      nav: 'التحقق من الهوية',
      title: 'التحقق من الهوية وصور الوجه',
      blocks: [
        { type: 'paragraph', text: 'نستخدم Sumsub للتحقق من الهوية وإجراء فحوص الامتثال ذات الصلة. وقد يُطلب منك خلال هذه العملية تقديم وثائق الهوية أو صور أو فيديو أو صور شخصية. وعند استخدام التحقق من الوجه، قد تقارن Sumsub صورة الوجه بصورة وثيقة الهوية وتجري فحص الحيوية. تعالج Sumsub هذه المعلومات نيابةً عنا ووفقاً لالتزاماتها التعاقدية والقانونية.' },
        { type: 'paragraph', text: 'لا تنشئ KOS Markets قوالب بيومترية بصورة مستقلة ولا تخزنها في أنظمتها. نتلقى نتيجة التحقق ونحتفظ بها وبالسجلات اللازمة للوفاء بالتزامات الامتثال ومنع الاحتيال والأمان والمنازعات وحفظ السجلات. وإذا اعتبر القانون معلومات التحقق من الوجه معلومات بيومترية أو حساسة، فسيُقدم أي إشعار إضافي أو تُطلب أي موافقة إضافية يفرضها القانون أثناء عملية التحقق.' },
      ],
    },
    {
      nav: 'الإفصاح',
      title: 'متى نفصح عن المعلومات الشخصية',
      blocks: [
        {
          type: 'list',
          intro: 'قد نفصح عن المعلومات الشخصية إلى:',
          items: [
            { text: 'مزودي خدمات التحقق من الهوية ومكافحة غسل الأموال وفحص العقوبات ومنع الاحتيال وإدارة المخاطر، بما في ذلك Sumsub.' },
            { text: 'البنوك ومعالجي المدفوعات ومزودي خدمات الدفع وأمناء الحفظ والأطراف الأخرى المشاركة في الإيداعات أو السحوبات أو المعاملات.' },
            { text: 'مزودي منصات التداول وبيانات السوق والسيولة والتقنية والاتصالات والاستضافة والخدمات السحابية والأمن السيبراني والمواقع والتحليلات ودعم العملاء والاتصالات، بما في ذلك مزود خدمة الدردشة عبر الإنترنت.' },
            { text: 'المستشارين المهنيين والمدققين، بما في ذلك مزودو الخدمات القانونية والمحاسبية وخدمات الامتثال والتأمين والاستشارات.' },
            { text: 'الجهات التنظيمية والمحاكم وأجهزة إنفاذ القانون والسلطات الضريبية وهيئات تسوية المنازعات والسلطات العامة الأخرى عندما يطلب القانون الإفصاح أو يسمح به.' },
            { text: 'أي مشترٍ أو مستثمر أو مُقرض أو مستشار أو خلف قانوني فيما يتعلق باندماج أو إعادة تنظيم أو تمويل أو بيع أو نقل مقترح أو مكتمل لكل أعمالنا أو أصولنا أو جزء منها، مع اتخاذ ضمانات مناسبة للسرية.' },
            { text: 'أشخاص آخرين بناءً على توجيهك أو موافقتك، أو عندما يكون الإفصاح مصرحاً به قانوناً.' },
          ],
        },
        { type: 'paragraph', text: 'نلزم مزودي الخدمات بحماية المعلومات الشخصية واستخدامها فقط لتقديم خدماتهم لنا أو وفقاً لما يسمح به القانون. ولا نبيع المعلومات الشخصية مقابل المال. وإذا أعطى القانون معنى أوسع لمصطلحي "البيع" أو "المشاركة"، فسنقدم الإشعارات والخيارات التي يفرضها ذلك القانون.' },
      ],
    },
    {
      nav: 'ملفات تعريف الارتباط',
      title: 'ملفات تعريف الارتباط والتقنيات المشابهة',
      blocks: [
        { type: 'paragraph', text: 'يستخدم موقعنا ملفات تعريف الارتباط والتخزين المحلي والبرامج النصية والتقنيات المشابهة لتشغيل الموقع وتذكر اللغة وتفضيلات العرض والحفاظ على الأمان وتوفير الدردشة عبر الإنترنت وفهم استخدام الموقع وتشخيص المشكلات وتحسين الأداء. وتقدم أطراف ثالثة بعض هذه التقنيات وقد تتلقى من خلالها معلومات تقنية ومعلومات استخدام.' },
        { type: 'paragraph', text: 'عندما يطلب القانون، لا تُستخدم التقنيات غير الضرورية إلا بعد موافقتك. ويمكنك تغيير اختياراتك عبر أدوات ملفات تعريف الارتباط لدينا، إن توفرت، أو إعدادات المتصفح. وقد يؤدي حظر بعض التقنيات إلى عدم عمل أجزاء من الموقع أو الخدمات بصورة صحيحة.' },
        { type: 'paragraph', text: 'قد تتوفر معلومات إضافية عن التقنيات التي نستخدمها ومزوديها وأغراضها ومدتها في سياسة منفصلة لملفات تعريف الارتباط.' },
      ],
    },
    {
      nav: 'النقل الدولي',
      title: 'موقع البيانات ونقلها دولياً',
      blocks: [
        { type: 'paragraph', text: 'يُستضاف نظام إدارة علاقات العملاء الرئيسي لدينا وسجلات العملاء المحفوظة فيه في سنغافورة. ونظراً إلى عمل عملائنا ومزودي خدماتنا دولياً، فقد يتم الوصول إلى المعلومات الشخصية أو معالجتها في دول غير دولة إقامتك، وقد تكون لهذه الدول قوانين مختلفة لحماية البيانات.' },
        { type: 'paragraph', text: 'عند الحاجة، نستخدم وسائل الحماية التعاقدية وآليات النقل وضوابط الوصول وغيرها من الضمانات لحماية المعلومات الشخصية المنقولة دولياً. ويمكنك الاتصال بنا للحصول على مزيد من المعلومات عن الضمانات المتعلقة بمعلوماتك.' },
      ],
    },
    {
      nav: 'مدة الاحتفاظ',
      title: 'مدة احتفاظنا بالمعلومات الشخصية',
      blocks: [
        { type: 'paragraph', text: 'نحتفظ بمعلومات الحساب والتحقق من الهوية والمعاملات والامتثال ذي الصلة طوال فترة بقاء حسابك مفتوحاً. ونراجع معلومات اعرف عميلك (KYC) ونحدّثها مرة واحدة على الأقل كل 12 شهراً، وقد نجري مراجعات أكثر تكراراً عندما تتطلب المخاطر أو القوانين أو اللوائح أو تغير ظروفك ذلك.' },
        { type: 'paragraph', text: 'بعد إغلاق الحساب، نحتفظ بالمعلومات الشخصية ذات الصلة لمدة 12 شهراً. وإذا تطلب القانون أو شرط تنظيمي أو مطالبة قانونية أو نزاع أو تدقيق أو تحقيق رسمي مدة أطول، نحتفظ بالمعلومات المعنية طوال تلك المدة. ويكون لمتطلب الاحتفاظ القانوني هذا الأولوية على مدة الاثني عشر شهراً.' },
        { type: 'paragraph', text: 'عندما لا تعود المعلومات ضرورية، نحذفها أو نخفي هويتها أو نعزلها بشكل آمن إلى أن يصبح حذفها ممكناً.' },
      ],
    },
    {
      nav: 'الأمان',
      title: 'كيفية حماية المعلومات الشخصية',
      blocks: [
        { type: 'paragraph', text: 'نستخدم ضمانات إدارية وتقنية ومادية لحماية المعلومات الشخصية من الفقد العرضي أو غير القانوني أو سوء الاستخدام أو الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. وقد تشمل هذه الضمانات ضوابط الوصول والتشفير عند الاقتضاء ومراقبة الأنظمة واختبارات الأمان والتزامات الموظفين بالسرية وضوابط مزودي الخدمات.' },
        { type: 'paragraph', text: 'لا يوجد موقع أو وسيلة نقل أو نظام تخزين آمن بالكامل. ويجب عليك حماية بيانات تسجيل الدخول واستخدام أجهزة وشبكات آمنة والاتصال بنا فوراً إذا اشتبهت في وصول غير مصرح به إلى حسابك أو معلوماتك الشخصية.' },
      ],
    },
    {
      nav: 'حقوقك',
      title: 'حقوق الخصوصية الخاصة بك',
      blocks: [
        {
          type: 'list',
          intro: 'وفقاً لمكان إقامتك والقانون المعمول به، قد يكون لك الحق في:',
          items: [
            { text: 'السؤال عما إذا كنا نعالج معلوماتك الشخصية وطلب الوصول إليها.' },
            { text: 'مطالبتنا بتصحيح المعلومات غير الدقيقة أو غير المكتملة.' },
            { text: 'مطالبتنا بحذف المعلومات في ظروف معينة.' },
            { text: 'طلب تقييد المعالجة أو الاعتراض على معالجة معينة.' },
            { text: 'تلقي معلومات معينة بصيغة قابلة للنقل.' },
            { text: 'سحب الموافقة عندما تستند المعالجة إلى الموافقة.' },
            { text: 'إلغاء الاشتراك في التسويق المباشر.' },
            { text: 'طلب معلومات عن النقل الدولي أو اتخاذ القرارات الآلية، حيثما ينطبق.' },
            { text: 'تقديم شكوى إلينا أو إلى جهة الخصوصية أو حماية البيانات المختصة.' },
          ],
        },
        { type: 'paragraph', text: 'هذه الحقوق ليست مطلقة. فعلى سبيل المثال، قد نحتاج إلى الاحتفاظ بالمعلومات للامتثال لالتزامات الخدمات المالية أو مكافحة غسل الأموال أو الضرائب أو اللوائح أو المنازعات أو الالتزامات القانونية. وقد نطلب منك التحقق من هويتك قبل تنفيذ الطلب. سنرد خلال المدة التي يحددها القانون ونوضح أي سبب قانوني لرفض الطلب أو تقييده.' },
        { type: 'paragraph', text: 'لممارسة أحد حقوق الخصوصية، اتصل بنا باستخدام البيانات الواردة في القسم 16، واكتب "Privacy Request" في موضوع الرسالة. يرجى عدم إرسال كلمات مرور أو وثائق هوية غير ضرورية عبر البريد الإلكتروني العادي.' },
      ],
    },
    {
      nav: 'التسويق',
      title: 'المراسلات التسويقية',
      blocks: [
        { type: 'paragraph', text: 'قد نرسل معلومات عن منتجاتنا أو خدماتنا أو فعالياتنا أو عروضنا الترويجية عندما يسمح القانون. ويمكنك إلغاء الاشتراك باستخدام الخيار الموجود في الرسالة التسويقية أو الاتصال بنا. وقد نستمر في إرسال المراسلات المتعلقة بالخدمة أو الحساب أو المعاملات أو الأمان أو الشؤون القانونية أو التنظيمية والضرورية لعلاقتنا معك.' },
      ],
    },
    {
      nav: 'الأطفال',
      title: 'الأطفال',
      blocks: [
        { type: 'paragraph', text: 'لا يستهدف موقعنا وخدماتنا الأشخاص الذين تقل أعمارهم عن 18 عاماً، ولا نفتح لهم حسابات عن علم. وإذا كنت تعتقد أن شخصاً دون 18 عاماً قدم لنا معلومات شخصية، فاتصل بنا حتى نتمكن من التحقيق واتخاذ الإجراء المناسب.' },
      ],
    },
    {
      nav: 'الأطراف الثالثة',
      title: 'مواقع وخدمات الأطراف الثالثة',
      blocks: [
        { type: 'paragraph', text: 'قد يحتوي موقعنا على روابط أو محتوى وخدمات مضمّنة من أطراف ثالثة. وقد تجمع هذه الأطراف معلومات شخصية وفقاً لإشعارات الخصوصية الخاصة بها. ولسنا مسؤولين عن ممارسات الخصوصية لديها، ونشجعك على قراءة إشعاراتها قبل تقديم المعلومات أو استخدام خدماتها.' },
      ],
    },
    {
      nav: 'تغييرات السياسة',
      title: 'التغييرات على هذه السياسة',
      blocks: [
        { type: 'paragraph', text: 'قد نحدّث سياسة الخصوصية هذه لتعكس التغييرات في ممارساتنا أو خدماتنا أو التزاماتنا القانونية. وسننشر السياسة المعدلة في هذه الصفحة ونحدّث تاريخ سريانها. وعندما يطلب القانون، سنقدم إشعاراً إضافياً أو نطلب الموافقة قبل سريان أي تغيير جوهري.' },
      ],
    },
    {
      nav: 'اتصل بنا',
      title: 'الاتصال والشكاوى',
      blocks: [
        { type: 'paragraph', text: 'يمكن إرسال الأسئلة وطلبات الخصوصية والشكاوى إلى:' },
        { type: 'contact', company: 'KOS Markets Limited', emailLabel: 'البريد الإلكتروني', addressLabel: 'العنوان المسجل', address: registeredAddress },
        { type: 'paragraph', text: 'يرجى استخدام عنوان الموضوع "Privacy Request" أو "Privacy Complaint"، وتضمين معلومات كافية لفهم طلبك، ولكن لا ترسل كلمات مرور أو وثائق هوية غير ضرورية عبر البريد الإلكتروني العادي.' },
        { type: 'paragraph', text: 'سنؤكد استلام شكاوى الخصوصية ونحقق فيها ونرد خلال المدة التي يحددها القانون. وإذا لم تكن راضياً عن ردنا، فقد يكون لك الحق في تقديم شكوى إلى جهة الخصوصية أو حماية البيانات في ولايتك القضائية.' },
      ],
    },
  ],
)

export const privacyPolicyContent: Record<AppLang, PrivacyPolicyContent> = {
  en,
  cn,
  tw,
  ja,
  ms,
  ko,
  id,
  th,
  vi,
  ar,
}
