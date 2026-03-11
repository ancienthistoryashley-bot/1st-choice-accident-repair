# 1st Choice Accident Repair Centre - Website Specification

## Project Overview
- **Name:** 1st Choice Accident Repair Centre Website
- **Type:** Multi-page business website
- **Core Functionality:** Showcase accident repair services, collect quotes, display testimonials
- **Target Users:** Car owners in South Wales needing accident repairs, insurance companies

## Company Info
- **Name:** 1st Choice Accident Repair Centre Ltd
- **Location:** Cardiff, South Wales
- **Tagline:** "Your 1st CHOICE for ACCIDENT REPAIR in South Wales"
- **Certifications:** BS10125:2022 Approved

## Services
1. Accident repair (mini to long wheel base transit)
2. Diamond cut & standard finish alloy wheel refurbishment
3. Paintwork (stonechip to re-spray)
4. Jig alignment
5. Three quality paint systems
6. Laser four wheel alignment
7. Air conditioning diagnostics
8. ADAS systems re-calibration
9. EV vehicle repairs
10. Online estimates & full insurance assessments
11. Multiple manufacturers approvals

## Selling Points
- Work with multiple insurers
- High excess? Alternative available
- Free no obligation quotes
- Online estimating with photo upload
- Manufacturer approvals
- Quick turnaround

## Testimonials
1. "Incredible service in both customer and repair. The customer service team arranged for my car to be dropped off at Enterprise where I was picking up my replacement car, then picked up my car the following morning so I didn't lose out on bus or taxi fare! The repair team had the car fixed within 2 working days when it was estimated a week."

2. "Having picked up my MG from first choice ARC after 7 days I have to admit that the work is 100% and the ladies on reception again 100% they were kind courteous and understanding all concerned are a credit to the company."

3. "Danielle was incredibly helpful with my elderly father. She was patient, attentive and very understanding. She also made sure he was comfortable with his courtesy car before he drove it away."

## Pages

### 1. Home (/)
- Hero section with animated background
- Services overview cards
- Why choose us section
- Testimonials carousel
- Call-to-action for free quote
- Contact preview

### 2. Services (/services)
- All services as detailed cards
- Icons for each service
- Detailed descriptions

### 3. About Us (/about)
- Company history/info
- Manufacturer approvals display
- Certifications (BS10125:2022)
- Team/expertise info

### 4. Contact (/contact)
- Contact form
- Phone number
- Email
- Address (Cardiff area)
- Business hours
- Map placeholder

### 5. Get Quote (/quote)
- Multi-step quote form
- Vehicle details
- Damage description
- Photo upload UI
- Contact info collection

## Design System

### Colors
- Primary: #1e3a5f (deep blue)
- Secondary: #ff6b35 (orange accent)
- Background: #0a0a0a (dark) / #ffffff (light)
- Card background: rgba(255,255,255,0.05) with blur
- Text: #ffffff / #1a1a1a

### Typography
- Headings: Inter or Geist (bold, modern)
- Body: Inter

### Effects
- Glassmorphism on cards (backdrop-blur)
- Hover scale/glow on cards
- Smooth transitions
- Hero with subtle animation

### Components (shadcn/ui)
- Cards
- Buttons
- Forms
- Navigation
- Accordions
- Carousel

## Tech Stack
- React + Next.js
- shadcn/ui + Tailwind CSS
- TypeScript
- Framer Motion for animations

## Images
Use high-quality stock images from Unsplash/Pexels for:
- Car repair/body shop场景
- Damaged vehicles
- Repair work in progress
- Happy customers
- Modern garage

## Acceptance Criteria
- [ ] All 5 pages created and functional
- [ ] Responsive on mobile, tablet, desktop
- [ ] Glassmorphism cards with hover effects
- [ ] Hero section with animated background
- [ ] Contact form UI complete
- [ ] Quote form with photo upload UI
- [ ] Navigation works between all pages
- [ ] Professional, modern appearance
- [ ] Deployed to Vercel with public URL