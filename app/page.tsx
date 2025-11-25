// app/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

type Validator = {
  name: string;
  stash: string;
  commission: string;
  location: string;
  status: "active" | "waiting";
};

const TELEMETRY_URL =
  "https://telemetry.polkadot.io/#/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3";

const CONTACT_EMAIL = "atlasvalidator.ops@gmail.com";
const CONTACT_PHONE = "478-320-2596";
const CONTACT_PHONE_FORMATTED = "+1-478-320-2596";

const VALIDATORS: Validator[] = [
  {
    name: "ATLAS VALIDATOR",
    stash: "1Nizd4U2Ncw4CFuZxaT6PbX6JLB2s9mEWfGGoGY8fJRVAvv",
    commission: "0% For a Limited Time Only",
    location: "France",
    status: "active",
  },
  {
    name: "ATLAS VALIDATOR",
    stash: "13pnfhCTNKqkqWLM7VpMMNh2AWtbN8irNzgqhTLycjNSdQEb",
    commission: "0% For a Limited Time Only",
    location: "Argentina",
    status: "active",
  },
];

function RewardsCalculator() {
  const [stakeAmount, setStakeAmount] = useState<string>("1000");
  
  const calculateRewards = () => {
    const amount = parseFloat(stakeAmount) || 0;
    const apy = 0.14; // 14% average APY
    const commission = 0.0; // 0% commission during promotion
    
    const yearlyReward = amount * apy * (1 - commission);
    const monthlyReward = yearlyReward / 12;
    const dailyReward = yearlyReward / 365;
    
    return {
      daily: dailyReward.toFixed(2),
      monthly: monthlyReward.toFixed(2),
      yearly: yearlyReward.toFixed(2),
    };
  };
  
  const rewards = calculateRewards();
  
  return (
    <div className="rounded-2xl border border-pink-800/50 bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-6">
      <h3 className="text-xl font-semibold mb-4 text-pink-300">
        💰 Rewards Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Stake Amount (DOT)
          </label>
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-pink-500 focus:outline-none"
            placeholder="1000"
            min="10"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center p-3 bg-slate-800/50 rounded-lg">
            <div className="text-2xl font-bold text-pink-400">
              {rewards.daily}
            </div>
            <div className="text-xs text-slate-400 mt-1">DOT/day</div>
          </div>
          <div className="text-center p-3 bg-slate-800/50 rounded-lg">
            <div className="text-2xl font-bold text-pink-400">
              {rewards.monthly}
            </div>
            <div className="text-xs text-slate-400 mt-1">DOT/month</div>
          </div>
          <div className="text-center p-3 bg-slate-800/50 rounded-lg">
            <div className="text-2xl font-bold text-pink-400">
              {rewards.yearly}
            </div>
            <div className="text-xs text-slate-400 mt-1">DOT/year</div>
          </div>
        </div>
        
        <p className="text-xs text-slate-400 italic">
          * Based on ~14% APY and 0% commission. Actual rewards may vary based on network conditions.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="w-full max-w-6xl mx-auto px-4 py-10 md:py-16">
        
        {/* Hero Header */}
        <header className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-pink-300 bg-pink-900/30 border border-pink-800/50 rounded-full">
            🎉 0% Commission - Limited Time Offer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            AtlasValidator Nodes
          </h1>
          <p className="mt-2 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Secure, reliable Polkadot validation with global infrastructure. 
            Nominate today and earn rewards while securing the network.
          </p>

          {/* NEW: Ready to Setup link to Need Help section */}
          <div className="mt-6 flex justify-center">
            <Link
              href="#need-help"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/70 border border-pink-700/60 text-pink-300 text-sm font-medium hover:bg-pink-700/20 hover:border-pink-500 transition-colors"
            >
              Ready to set up? Jump to step-by-step help
            </Link>
          </div>
        </header>

        {/* Stats Bar */}
        <section className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-bold text-pink-400">99.9%</div>
            <div className="text-sm text-slate-300 mt-1">Uptime</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-bold text-pink-400">~14%</div>
            <div className="text-sm text-slate-300 mt-1">APY</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-bold text-pink-400">0%</div>
            <div className="text-sm text-slate-300 mt-1">Commission*</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-bold text-pink-400">24/7</div>
            <div className="text-sm text-slate-300 mt-1">Monitoring</div>
          </div>
        </section>

        {/* Validator Cards */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          {VALIDATORS.map((v) => (
            <div
              key={v.stash}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-pink-800/50 transition-all hover:shadow-lg hover:shadow-pink-900/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-semibold text-white">{v.name}</h2>
                    <span className="px-2 py-0.5 text-xs font-semibold rounded bg-blue-900/30 text-blue-400 border border-blue-800/50" title="Verified on-chain identity">
                      ✓ Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{v.location}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  v.status === 'active' 
                    ? 'bg-green-900/30 text-green-400 border border-green-800/50' 
                    : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50'
                }`}>
                  {v.status === 'active' ? '🟢 Active' : '🟡 Waiting'}
                </span>
              </div>
              
              <div className="space-y-3 text-sm md:text-base">
                <div>
                  <span className="text-slate-300">Commission:</span>
                  <span className="ml-2 font-medium text-pink-400">{v.commission}</span>
                </div>
                
                <div>
                  <span className="text-slate-300 block mb-1">Stash Address:</span>
                  <code className="block bg-slate-800/70 px-3 py-2 rounded-lg text-xs break-all font-mono text-slate-200 group-hover:bg-slate-800 transition-colors">
                    {v.stash}
                  </code>
                  <button 
                    onClick={() => navigator.clipboard.writeText(v.stash)}
                    className="mt-2 text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy address
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Rewards Calculator */}
        <section className="mb-12">
          <RewardsCalculator />
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Telemetry */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              📊 Live Status
            </h2>
            <p className="text-sm md:text-base text-slate-300 mb-4">
              Monitor real-time validator performance, block production, and network participation on Polkadot Telemetry.
            </p>
            <Link
              href={TELEMETRY_URL}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors font-medium"
            >
              Open Telemetry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </section>

          {/* Why Choose Us */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold mb-3">⚡ Why Choose Us?</h2>
            <ul className="space-y-2 text-sm md:text-base text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span>Geographic diversity (France & Argentina)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span>Enterprise-grade infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span>24/7 automated monitoring with alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span>Experienced DevOps team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span>Active governance participation</span>
              </li>
            </ul>
          </section>
        </div>

        {/* How to Nominate */}
        <section className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">🎯 How to Nominate</h2>
          <ol className="space-y-4">
            {[
              {
                title: "Install Polkadot.js Extension",
                content: (
                  <>
                    Download the{" "}
                    <Link
                      href="https://polkadot.js.org/extension/"
                      target="_blank"
                      className="text-pink-400 hover:underline"
                    >
                      Polkadot.js browser extension
                    </Link>{" "}
                    and create your account. Keep your seed phrase safe!
                  </>
                ),
              },
              {
                title: "Get DOT Tokens",
                content: "Transfer DOT to your Polkadot relay chain address (minimum 10 DOT required for staking).",
              },
              {
                title: "Navigate to Staking",
                content: (
                  <>
                    Go to{" "}
                    <Link
                      href="https://polkadot.js.org/apps"
                      target="_blank"
                      className="text-pink-400 hover:underline"
                    >
                      polkadot.js.org/apps
                    </Link>{" "}
                    → Network → Staking → Accounts.
                  </>
                ),
              },
              {
                title: "Bond Your DOT",
                content: "Click 'Stash' and bond your DOT (keep 0.2-1 DOT unbonded for transaction fees).",
              },
              {
                title: "Nominate Our Validators",
                content: (
                  <div>
                    <p className="mb-2">Click <strong>+ Nominator</strong> and search for:</p>
                    <ul className="ml-6 space-y-1 text-pink-400">
                      <li>• <strong>ATLAS VALIDATOR</strong> (both nodes use this identity)</li>
                    </ul>
                    <p className="mt-2 text-slate-400 text-sm">
                      Or paste the stash addresses from above. You can nominate up to 16 validators for diversification. 
                      Both our validators share the same on-chain identity for easy discovery!
                    </p>
                  </div>
                ),
              },
              {
                title: "Submit & Earn",
                content: "Submit the nomination transaction. Your nomination becomes active in the next era (~24 hours).",
              },
            ].map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div className="flex-1 pt-0.5">
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <div className="text-sm md:text-base text-slate-300">
                    {step.content}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Important Information */}
        <section className="mb-12 rounded-2xl border border-amber-700/50 bg-amber-950/30 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-amber-300">
            <span>⚠️</span> Important Information
          </h2>
          <div className="space-y-3 text-sm md:text-base text-slate-200">
            <p>
              <strong className="text-white">Rewards:</strong> Paid automatically every era (~24 hours). Commission is deducted before distribution.
            </p>
            <p>
              <strong className="text-white">Unbonding Period:</strong> 28 days required to unstake your DOT after requesting withdrawal.
            </p>
            <p>
              <strong className="text-white">Slashing Risk:</strong> If a validator misbehaves (rare), nominators share slashing penalties. We maintain highest security standards to prevent this.
            </p>
            <p>
              <strong className="text-white">Not Financial Advice:</strong> Staking involves risk. Only stake what you can afford to lock for 28+ days.
            </p>
          </div>
        </section>

        {/* Need Help? */}
        <section
          id="need-help"
          className="mb-12 rounded-2xl border border-green-700/50 bg-green-950/20 p-6 md:p-8"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-300">
            🤝 Need Help Getting Started?
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-slate-200">
              First time nominating? We offer <strong className="text-white">FREE personalized guidance</strong> to walk you through the entire nomination process step-by-step.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-slate-900/40 rounded-lg">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">WhatsApp Video Call</h3>
                  <p className="text-sm text-slate-300">Live screen sharing to guide you through the process</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-900/40 rounded-lg">
                <div className="text-2xl">💻</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Zoom Meeting</h3>
                  <p className="text-sm text-slate-300">Scheduled video call at your convenience</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-900/60 rounded-lg border border-slate-700">
              <p className="text-slate-200 mb-3">
                <strong className="text-white">Schedule your free consultation:</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT_PHONE_FORMATTED}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: {CONTACT_PHONE}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Schedule Nomination Help Call`}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email to Schedule
                </a>
              </div>
            </div>
            <p className="text-sm text-slate-300 italic mt-3">
              * Available Monday-Friday, 9 AM - 6 PM CST. Weekend appointments available by request.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-semibold mb-6">❓ Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">What is the minimum stake?</h3>
              <p className="text-slate-300">The minimum is currently 10 DOT, though this may change based on network governance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How often are rewards paid?</h3>
              <p className="text-slate-300">Rewards are distributed every era, which is approximately 24 hours on Polkadot.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I unstake anytime?</h3>
              <p className="text-slate-300">You can request to unbond anytime, but there's a 28-day waiting period before you can withdraw your DOT.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Should I nominate multiple validators?</h3>
              <p className="text-slate-300">Yes! You can nominate up to 16 validators. This diversifies your risk and increases chances of earning rewards.</p>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="text-center p-8 rounded-2xl border border-slate-800 bg-slate-900/60">
          <p className="text-xl font-semibold mb-4">Questions or Need Support?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a
              href={`tel:${CONTACT_PHONE_FORMATTED}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="text-sm text-slate-400">
            We're here to help you get started with staking! 🚀
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Built with ❤️ for the Polkadot ecosystem
          </p>
        </footer>
      </div>
    </main>
  );
}
