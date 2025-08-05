---
title: "What do you do with $10,000? Start a company, obviously"
date: "2025-08-03T09:35:07.322Z"
ogImage:
  url: "https://raw.githubusercontent.com/a11rew/a11rew.dev/refs/heads/main/public/assets/photos/the-10k-question.jpeg"
draft: false
description: "We turned a $10,000 hackathon prize into Budge AI, a personal finance app that tracks your spending, no bank logins needed. Here’s how."
---

![Eloke celebrating with the cheque](https://i.imgur.com/CseeOJk.gif)

Beautiful Nairobi, December 2024. We were high off life after being named [winners in Block’s TBD Hackathon](https://themandatelive.com/block-announces-winner-in-tbd-hackathon-at-africa-bitcoin-conference-highlighting-innovation-in-payments-across-africa/). We had built a no-internet-required solution for travellers to make payments without needing local payment methods.

Imagine landing in Kenya with no local SIM card, no familiarity with M-Pesa, and no idea of the exchange rates, yet still being able to pay for things from your phone. That was our solution tbDEX Go.

We were thrilled to have our idea validated and excited for the opportunity to scale our solution. Shortly after however, the division at Block pioneering the technology was discontinued. This meant the partnerships with financial institutions that our solution relied on were no longer available.

Leaving us with the <s>million</s> ten-thousand-dollar question:

> what were we going to build?

In reality, it wasn't much of a question. We already knew what we wanted to build and why we wanted to build it. We just weren't sure how.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe 
    src="https://www.youtube.com/embed/_27aMFYj_Xo?start=1890" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

_[Watch our winning presentation here!](https://www.youtube.com/watch?v=_27aMFYj_Xo&t=1890s)_

## I’m not poor, I just need more money

In 2021, I joined the workforce. Fresh-faced and optimistic, expectant about all the things I could get by myself with my newfound income. Reality however, as they say, is often disappointing.

My first pay-check came in, and I thought, "Wow, this is all mine?" Nope. I was broke before the end of the month.

In fact, every month was the same cycle: **paycheck-to-paycheck**. I wasn't too worried, though. It was an entry-level job, so being broke felt like part of the deal. Things would get better. Right?

I gained skills and experience, my income grew. Promotions, switching jobs, and side hustles. The result was painfully consistent: broke before the end of the month.

It slowly dawned on me that earning more alone wasn't going to be the answer to my financial problems.

## Where's your money going then?

I went online searching for answers and discovered I wasn't alone. There's a whole community of people trying to get control of their finances and break the stress-inducing silence around money. I found amazing YouTubers like [Nischa](https://www.youtube.com/@nischa) and [Humphrey Yang](https://www.youtube.com/@humphrey), who all preached the first rule of personal finance:

> To make any sense of your money, you need to know where it's going.

This sounded simple enough: I needed to track my spending. I started with a spreadsheet template from Nischa, logging every expense and comparing it against my budget.

The shift was monumental. Knowing where my money was going allowed me to be more intentional with my spending. I could cover my essentials and still have money left for guilt-free spending on things I wanted.

## Better days, almost

This was great, but there was a problem: manually entering transactions was tedious. My motivation kept me going for a while, but that would soon fade and I found myself slipping back into old habits. I started looking for a sustainable solution.

I found apps like YNAB and Spendee that promised automatic bank syncing and effortless budgeting. But the reality? They simply didn’t work for me. My local banks weren’t supported, and manual entry quickly became unavoidable again.

In 2023, Eloke and I started talking about this problem. We decided to build a personal finance app that lets people track their spending automatically. We quickly discovered why this feature was missing from other apps:

> Open Banking is a myth. Especially in Africa

At the time, we spun our wheels trying to solve the problem in a number of different ways. Automatic tracking was a non-negotiable for our app and so we explored local financial APIs, only to find them frustratingly expensive, unreliable and slow. Not very helpful for the application we wanted to build. We shelved the idea and moved on to other things.

## Eureka

Time is not just a spice in the cabinet (last pun, I promise), it has a great way of giving you new perspective.

In October 2024, after reviewing my finances for the last month and realising I was falling back into old ways, I tweeted my frustration:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I just want a budgeting app that <br>- looks as good as YNAB<br>- categorizes transactions automatically<br>- lets me build my own integrations for my bank &amp; mobile money cause nobody has figured this out somehow<br>- supports multi-currency budgets<br>- has wealth tracking (savings and such)</p>&mdash; Andrew (@a11rew) <a href="https://twitter.com/a11rew/status/1842574338970804253?ref_src=twsrc%5Etfw">October 5, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The tweet's third wish - “lets me build my own integrations for my bank and mobile money” was the developer in me providing my common-sense answer to the problem of bank sync:

> I have the data - I have debit/credit alerts from my bank & mobile money, I have statements. Why can’t I just give those to the apps?

Turns out, therein lied the solution to the problem we’d been mulling for two years, staring me in the face. I didn’t need to go through banks to get a list of my transactions - I already had that. I needed a solution that could work with the same transaction notification data my bank provided and then let me manage my finances based on that data.

**Light bulb moment.**

## Onward then

You see now why it wasn’t much of a deliberation? We would build a solution to a painful problem we personally had - we would be customers #0 and #1.

I got back to Accra from Nairobi and three days later was on a flight to Lagos. There we fleshed out the rest of “how”:

- We were going to use transaction notifications - emails, SMS, bank app push notifications - to build an accurate, automatic spending log.
- It needed to be secure and not encroach on privacy - only work with data the user consciously chooses to share.
- Include powerful yet intuitive budgeting, goal tracking, and subscription management tools.
- Provide real-time insights, so managing money never feels like a chore. (Overspent on Uber? Instant notification.)
- And, crucially, build something visually appealing - software you actually want to use every day. "Look and feel as good as YNAB" came up a lot, YNAB is great software, we're big fans.

We then made concrete plans: hired our amazing lawyer (whom we first met in a Mega Chicken in Lekki, crazy story), incorporated the company [**Rejenga Inc**](https://rejenga.com/), and brought on Fortune, one of the smartest engineers we knew. Together, we began building what’s now known as **Budge AI**.

## Solutions (finally!)

Here’s exactly what we’re building and why you should care:

[**Budge AI**](https://budgeai.com) is a personal finance app that helps you effortlessly track spending and budget, no bank logins required.

- **Automatically categorize transactions**: Spend less time logging expenses.
- **Talk to your money**: Ask questions in natural language and get personalized insights.
- **AI-powered budgeting**: Learns your spending patterns to proactively help you stay on budget.
- **Designed beautifully**: Looks great, feels intuitive, and removes financial stress.

And did I say it looks great already? Because it does.

## Sign me up!

We’ve been hard at work for the past 7 months building and we’re close to inviting the first users to try it out.

Want to be among them? Sign up here on our website with the “Get Early Access” button.

[budgeai.com](https://budgeai.com)

And share this with anyone you know who would also like the opportunity to feel confident about their money.

<a href="https://budgeai.com" target="_blank">![Budge AI Website Screenshot](https://budgeai.com/og-image.png)</a>
