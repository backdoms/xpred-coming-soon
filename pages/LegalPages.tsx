import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Scale, FileText, AlertTriangle } from 'lucide-react';

const PageHeader: React.FC<{ title: string; icon: React.ReactNode; subtitle: string }> = ({ title, icon, subtitle }) => (
  <div className="pt-32 pb-12 bg-gradient-to-b from-gray-900 to-black border-b border-white/5">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex items-center gap-4 mb-4 text-brand-gold">
        {icon}
        <span className="text-xs font-bold uppercase tracking-widest">Legal & Compliance</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">{title}</h1>
      <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
    </div>
  </div>
);

const ContentSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container mx-auto px-6 md:px-12 py-16">
    <div className="max-w-3xl prose prose-invert prose-lg text-gray-300">
      {children}
    </div>
  </div>
);

export const TermsOfService: React.FC = () => (
  <>
    <PageHeader
      title="Terms of Service"
      icon={<Scale size={20} />}
      subtitle="Last Updated: 24.12.2025. Please read these terms carefully."
    />
    <ContentSection>
      <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-8">
        <p className="text-red-400 font-bold text-sm">IMPORTANT NOTICE: THESE TERMS CONTAIN A BINDING ARBITRATION PROVISION AND WAIVER OF CLASS ACTION RIGHTS.</p>
        <p className="text-red-400 font-bold text-sm mt-2">NO PURCHASE IS NECESSARY TO ENTER OR WIN ANY SWEEPSTAKES. A PURCHASE WILL NOT INCREASE YOUR CHANCES OF WINNING.</p>
      </div>

      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using XPred.com (the "Platform"), creating an account, or downloading our mobile application, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Platform. XPred is operated by [Your Legal Entity Name] ("Company," "we," "us").</p>

      <h3>2. The Service & Virtual Currencies</h3>
      <p>XPred is a social prediction platform offering two modes of play:</p>
      <ul>
        <li><strong>Standard Play (XP):</strong> Played with "X-Points" (XP). XP allows you to participate in social contests, climb leaderboards, and earn status. XP has no real-world monetary value and cannot be redeemed for cash or prizes.</li>
        <li><strong>Sweepstakes Play (XC):</strong> Played with "X-Coins" (XC). XC is obtained for free via promotional methods (including purchase of XP packs, daily login bonuses, or mail-in requests). XC can be used to participate in Sweepstakes contests. Winnings in XC may be redeemed for prizes subject to our Sweepstakes Rules.</li>
      </ul>

      <h3>3. Eligibility</h3>
      <p>You represent and warrant that you are:</p>
      <ul>
        <li>At least 18 years of age (or 19+ in AL/NE, 21+ in MA).</li>
        <li>A resident of the United States.</li>
        <li>NOT located in the following "Excluded Territories": Washington, Idaho, Nevada, Michigan, and any other jurisdiction where participation would be prohibited by law.</li>
        <li>Not a brave employee or immediate family member of XPred employees.</li>
      </ul>

      <h3>4. Account Registration & Security</h3>
      <ul>
        <li><strong>One Account:</strong> You may only open one account. Multiple accounts to abuse bonuses or bypass limits will result in immediate termination and forfeiture of all XC.</li>
        <li><strong>Accuracy:</strong> You must provide accurate information (Name, DOB, Address). Falsifying information constitutes a material breach of these Terms.</li>
        <li><strong>Security:</strong> You are responsible for maintaining the confidentiality of your login credentials.</li>
      </ul>

      <h3>5. Purchases & No Refunds</h3>
      <ul>
        <li><strong>XP Packs:</strong> You may purchase packages of XP. These purchases are for the license to use the virtual currency XP for social entertainment.</li>
        <li><strong>Free XC:</strong> You may receive XC as a free bonus when purchasing XP. You are strictly purchasing XP; the XC is a promotional gift.</li>
        <li><strong>Finality:</strong> All purchases are final. No refunds will be issued once the virtual items have been credited to your account.</li>
      </ul>

      <h3>6. Sweepstakes Rules (Summary)</h3>
      <ul>
        <li><strong>Participation:</strong> Using XC to make predictions constitutes a Sweepstakes Entry.</li>
        <li><strong>AMOE (Alternative Method of Entry):</strong> You may obtain XC without purchase by sending a handwritten 3x5 index card with your details to [Your Physical Address]. (See full "Official Sweepstakes Rules" page for details).</li>
        <li><strong>Verification:</strong> We reserve the right to verify your identity before any prize redemption.</li>
      </ul>

      <h3>7. Prohibited Conduct</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use any automated system, bot, or software to make predictions.</li>
        <li>Engage in collusion with other users to manipulate market outcomes.</li>
        <li>Create multiple accounts to exploit sign-up bonuses.</li>
        <li>Sell or transfer your account or virtual currency to a third party.</li>
        <li>Use the Platform for money laundering or illegal activity.</li>
      </ul>

      <h3>8. Intellectual Property</h3>
      <p>All content on XPred (logos, software, data, leaderboards) is the property of the Company. You are granted a limited, revocable, non-transferable license to use the Platform for personal entertainment.</p>

      <h3>9. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, XPred shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform, including loss of data or loss of virtual currency due to technical errors.</p>

      <h3>10. Dispute Resolution (Arbitration)</h3>
      <p>Any dispute arising out of these Terms shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Consumer Arbitration Rules. You waive your right to a jury trial or to participate in a class action lawsuit.</p>
    </ContentSection>
  </>
);

export const PrivacyPolicy: React.FC = () => (
  <>
    <PageHeader
      title="Privacy Policy"
      icon={<Lock size={20} />}
      subtitle="Last Updated: 24.12.2025"
    />
    <ContentSection>
      <h3>1. Introduction</h3>
      <p>XPred ("we") values your privacy. This Privacy Policy explains how we collect, use, and share your information when you use XPred.com.</p>

      <h3>2. Information We Collect</h3>
      <ul>
        <li><strong>Personal Information (PII):</strong> Name, Email Address, Date of Birth, Physical Address, Phone Number (collected during registration and verification).</li>
        <li><strong>Financial Information:</strong> Transaction history. We do not store full credit card numbers; these are handled by our Payment Processors (e.g., Stripe).</li>
        <li><strong>Usage Data:</strong> IP address, device type, browser type, pages visited, and prediction history.</li>
        <li><strong>Location Data:</strong> GPS or IP-based location data to verify you are not in an Excluded Territory.</li>
      </ul>

      <h3>3. How We Use Your Data</h3>
      <ul>
        <li>To provide the Service and manage your XP/XC balances.</li>
        <li>To verify your identity and age (Compliance/KYC).</li>
        <li>To detect and prevent fraud, collusion, and cheating.</li>
        <li>To improve our AI algorithms and platform functionality.</li>
        <li>To send marketing communications (which you can opt-out of).</li>
      </ul>

      <h3>4. Sharing of Information</h3>
      <p>We do not sell your personal data. We share data only with:</p>
      <ul>
        <li><strong>Service Providers:</strong> ID Verification partners (e.g., Persona/Veriff), Payment Processors, and Hosting services.</li>
        <li><strong>Legal Authorities:</strong> If required by subpoena, court order, or to prevent illegal activity.</li>
        <li><strong>Aggregated Data:</strong> We may share anonymized prediction data (e.g., "60% of users predicted Lakers") publicly.</li>
      </ul>

      <h3>5. Cookies & Tracking</h3>
      <p>We use cookies to maintain your session and analyze traffic. You can control cookie preferences through your browser settings.</p>

      <h3>6. Your Rights</h3>
      <p>Depending on your location (e.g., California - CCPA), you may have the right to:</p>
      <ul>
        <li>Access the specific personal data we hold about you.</li>
        <li>Request deletion of your data (subject to legal retention requirements).</li>
        <li>Opt-out of data sharing.</li>
      </ul>

      <h3>7. Data Security</h3>
      <p>We implement industry-standard encryption (SSL/TLS) to protect your data. However, no transmission over the internet is 100% secure.</p>
    </ContentSection>
  </>
);

export const ResponsibleGaming: React.FC = () => (
  <>
    <PageHeader
      title="Responsible Gaming"
      icon={<AlertTriangle size={20} />}
      subtitle="XPred is committed to providing a fun, social, and safe entertainment environment. Responsible Gaming (Social Play) Policy."
    />
    <ContentSection>
      <h3>1. Entertainment Only</h3>
      <p>XPred is designed for entertainment. XP and XC should be treated as part of a game. Never play with the intent of "earning a living" or "recovering losses."</p>

      <h3>2. Protection of Minors</h3>
      <ul>
        <li><strong>Identity Checks:</strong> We use third-party verification tools to ensure all players are 18+ (or legal age in their jurisdiction).</li>
        <li><strong>Parental Controls:</strong> We encourage parents to use filtering software (like NetNanny or CyberPatrol) to prevent minors from accessing the platform.</li>
      </ul>

      <h3>3. Player Safety Tools</h3>
      <p>We provide tools to help you manage your gameplay:</p>
      <ul>
        <li><strong>Purchase Limits:</strong> Set a limit on how much you can spend on XP packs per day, week, or month.</li>
        <li><strong>Time Limits:</strong> Set a limit on your daily login time.</li>
        <li><strong>Cool-Off Period:</strong> Take a break from XPred for 3, 7, or 30 days. Access will be revoked during this time.</li>
        <li><strong>Self-Exclusion:</strong> If you feel your gameplay is becoming problematic, you can request a permanent ban. This action is irreversible.</li>
      </ul>

      <h3>4. Signs of Problematic Behavior</h3>
      <ul>
        <li>Attempting to chase losses.</li>
        <li>Borrowing money to purchase XP packs.</li>
        <li>Lying to friends/family about time spent on the platform.</li>
        <li>Neglecting personal or professional responsibilities.</li>
      </ul>

      <h3>5. Resources for Help</h3>
      <p>If you or someone you know has a gambling problem, help is available:</p>
      <ul>
        <li><strong>National Council on Problem Gambling (NCPG):</strong> <a href="http://www.ncpgambling.org" className="text-brand-gold hover:underline">www.ncpgambling.org</a></li>
        <li><strong>Call:</strong> 1-800-522-4700 (US & Canada)</li>
        <li><strong>GamTalk:</strong> <a href="http://www.gamtalk.org" className="text-brand-gold hover:underline">www.gamtalk.org</a></li>
      </ul>
    </ContentSection>
  </>
);

export const AMLPolicy: React.FC = () => (
  <>
    <PageHeader
      title="AML & KYC Policy"
      icon={<Shield size={20} />}
      subtitle="Anti-Money Laundering (AML) & Know Your Customer (KYC)"
    />
    <ContentSection>
      <p className="mb-6">XPred complies with applicable federal regulations regarding Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF), including the Bank Secrecy Act (BSA).</p>

      <h3>1. Know Your Customer (KYC)</h3>
      <p>To redeem prizes (XC) or process large transactions, we strictly verify user identity.</p>
      <ul>
        <li><strong>Level 1 (Registration):</strong> Basic checks on Name, Address, and DOB against public databases.</li>
        <li><strong>Level 2 (Redemption):</strong> Before any redemption of prizes is processed, users must submit:
          <ul className="pl-6 mt-2 list-[circle]">
            <li>Government-issued Photo ID (Passport, Driver’s License).</li>
            <li>Proof of Address (Utility Bill, Bank Statement) dated within 90 days.</li>
            <li>Live Selfie (Biometric check).</li>
          </ul>
        </li>
      </ul>

      <h3>2. Transaction Monitoring</h3>
      <p>Our system (aided by AI) monitors for suspicious patterns, including but not limited to:</p>
      <ul>
        <li><strong>Structuring:</strong> Multiple small transactions designed to evade reporting thresholds.</li>
        <li><strong>Collusion:</strong> Users predicting opposite sides of a market to "dump" balance to another account.</li>
        <li><strong>Money Muling:</strong> Using different payment methods that do not match the account holder's name.</li>
      </ul>

      <h3>3. Closed Loop Redemption Policy</h3>
      <p>To prevent money laundering, XPred enforces a "Closed Loop" policy where possible:</p>
      <ul>
        <li>Redemptions may generally only be paid to a bank account or payment method held in the verified name of the account holder.</li>
        <li>We do not process redemptions to third parties.</li>
      </ul>

      <h3>4. Play-Through Requirement</h3>
      <p>To prevent XPred from being used as a "mixer," all XC (whether gifted via purchase or free entry) must be played through at least 1x (one time) in a prediction contest before it becomes Redeemable XC. You cannot purchase an XP Pack and immediately request a redemption of the free XC gift.</p>

      <h3>5. Reporting</h3>
      <p>XPred reserves the right to report suspicious activity to the Financial Crimes Enforcement Network (FinCEN) or other relevant authorities via Suspicious Activity Reports (SARs) without notifying the user.</p>

      <h3>6. Politically Exposed Persons (PEPs)</h3>
      <p>We screen users against Global Sanctions lists (OFAC) and PEP lists. Accounts matching these lists will be suspended pending investigation.</p>
    </ContentSection>
  </>
);

export const WithdrawalPolicy: React.FC = () => (
  <>
    <PageHeader
      title="Redemption & Withdrawal Policy"
      icon={<FileText size={20} />}
      subtitle="Last Updated: 24.12.2025"
    />
    <ContentSection>
      <h3>1. Introduction</h3>
      <p>At XPred.com, we offer two forms of virtual currency: X-Points (XP) and X-Coins (XC).</p>
      <ul>
        <li><strong>XP</strong> is strictly for social entertainment and status. It has no monetary value and cannot be withdrawn, redeemed, or exchanged for cash or prizes.</li>
        <li><strong>XC</strong> is our Sweepstakes entry token. XC that has been won through gameplay ("Redeemable XC") may be redeemed for cash prizes or gift cards, subject to the terms outlined below.</li>
      </ul>
      <p className="font-bold text-white mt-4">Rate of Redemption: 1.00 Redeemable XC = $1.00 USD.</p>

      <h3>2. Eligibility for Redemption</h3>
      <p>To request a redemption, you must meet the following criteria:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Verification:</strong> You must have successfully completed our KYC (Know Your Customer) Level 2 verification process, including providing a valid Government ID, Proof of Address, and a live biometric selfie.</li>
        <li><strong>Age & Location:</strong> You must be at least 18 years of age and not a resident of Washington, Idaho, Nevada, or Michigan.</li>
        <li><strong>Account Status:</strong> Your account must be in good standing (not suspended, flagged for collusion, or under investigation).</li>
      </ol>

      <h3>3. The "Play-Through" Requirement (AML Rule)</h3>
      <p>To comply with Anti-Money Laundering (AML) regulations and prevent the platform from being used as a money transmitter:</p>
      <ul>
        <li><strong>XC obtained via Purchase Bonus:</strong> Must be played through at least 1x (one time) in a prediction contest.
          <br /><span className="text-gray-500 text-sm block mt-1 ml-4">Example: If you buy a pack and receive 20 free XC, you cannot redeem that 20 XC immediately. You must use it to predict outcomes. If you win, the returned XC becomes "Redeemable."</span>
        </li>
        <li><strong>XC obtained via Free Daily Rewards:</strong> Must be played through 1x before becoming redeemable.</li>
      </ul>
      <p>Your Wallet will explicitly show two balances:</p>
      <ul>
        <li><strong>Unsettled XC:</strong> (Cannot be redeemed yet).</li>
        <li><strong>Redeemable XC:</strong> (Available for cash out).</li>
      </ul>

      <h3>4. Minimum & Maximum Limits</h3>
      <ul>
        <li><strong>Minimum Redemption:</strong> 50.00 XC ($50.00 USD). Requests below this amount will not be processed.</li>
        <li><strong>Maximum Redemption (Daily):</strong> $5,000.00 USD per 24-hour period.</li>
        <li><strong>Maximum Redemption (New York & Florida):</strong> Due to state sweepstakes regulations, the maximum redemption for a single spin/game win is capped at $5,000 USD for residents of New York and Florida.</li>
      </ul>

      <h3>5. Fees</h3>
      <p>XPred aims to process redemptions efficiently. However, to cover third-party processing costs:</p>
      <ul>
        <li><strong>Standard Fee:</strong> A processing fee of $2.00 or 2% of the transaction amount (whichever is higher) will be deducted from the total payout.</li>
        <li><strong>Gift Cards:</strong> Redemptions via digital Gift Cards are generally Fee-Free.</li>
      </ul>

      <h3>6. Payment Methods & Closed Loop Policy</h3>
      <p>For security, XPred operates a "Closed Loop" policy.</p>
      <ul>
        <li>Redemptions will generally be paid to the same payment method or bank account used to purchase XP Packs.</li>
        <li>The name on the bank account/e-wallet MUST MATCH the verified name on your XPred profile. We do not process payments to third parties or corporate accounts.</li>
      </ul>
      <p className="mt-4 font-bold text-white">Supported Methods:</p>
      <ul>
        <li>ACH Bank Transfer (1-5 Business Days).</li>
        <li>Instant Bank Transfer (Trustly/Plaid).</li>
        <li>Digital Gift Cards (Sent to registered email).</li>
      </ul>

      <h3>7. Processing Times</h3>
      <ul>
        <li><strong>Review Period:</strong> All redemption requests enter a "Pending Review" state for 24-48 hours. During this time, our security team reviews gameplay for irregularities (collusion, bot usage, arbitrage).</li>
        <li><strong>Transfer Time:</strong> Once approved, funds typically reach your account within 1-5 business days, depending on your bank's processing speed.</li>
      </ul>

      <h3>8. Tax Reporting (IRS)</h3>
      <p>If your total net winnings (Redemptions minus Purchases) exceed $600.00 USD in a calendar year, XPred is required by US law to file Form 1099-MISC with the IRS.</p>
      <ul>
        <li>You will be required to provide your Social Security Number (SSN) via a secure W-9 form before we can release funds exceeding this threshold.</li>
      </ul>

      <h3>9. Right to Cancel or Deny</h3>
      <p>XPred reserves the right to cancel any redemption request and return funds to the account balance (or void them) if we suspect:</p>
      <ul>
        <li>The use of multiple accounts (multi-accounting).</li>
        <li>Collusion between users (e.g., predicting both sides of a market to transfer funds).</li>
        <li>Use of VPNs to mask location from a restricted state.</li>
        <li>Chargebacks on previous XP purchases.</li>
      </ul>

      <h3>10. Contact</h3>
      <p>For questions regarding the status of a redemption, please contact billing@xpred.com.</p>
    </ContentSection>
  </>
);