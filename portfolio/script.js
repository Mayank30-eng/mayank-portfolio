/* ═══════════════════════════════════════════════════
   Mayank Portfolio — JavaScript
   ═══════════════════════════════════════════════════ */

// Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';
injectSpeedInsights();

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────
     PORTFOLIO DATA — Mayank's information
     ───────────────────────────────────────────────── */
  const PORTFOLIO = {
    name: 'Mayank',
    title: 'Backend-focused Full Stack Developer',
    education: 'Computer Science Engineering graduate',
    location: 'India',
    github: 'https://github.com/Mayank30-eng',
    linkedin: 'https://www.linkedin.com/in/mayank-gohiya-7b7974250/',
    email: 'mayankgohiya657@gmail.com',

    skills: {
      backend: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Authentication', 'Authorization'],
      frontend: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
      database: ['MongoDB', 'SQL', 'MySQL'],
      programming: ['JavaScript', 'Java'],
      tools: ['Git', 'GitHub', 'Docker', 'Redis', 'API Integration'],
    },

    projects: [
      {
        name: 'Backend Ledger API',
        description: 'Secure financial ledger API with JWT authentication, MongoDB transactions, immutable ledger entries, balance tracking, fund transfers, and idempotency keys.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Nodemailer'],
        features: ['Authentication & Authorization', 'Account management', 'Balance tracking', 'Transfers', 'Immutable ledger entries', 'Idempotency', 'MongoDB transactions', 'Token handling'],
        github: 'https://github.com/Mayank30-eng/Backend-Ledger',
        demo: 'Pending',
      },
      {
        name: 'GenLoop',
        description: 'GenLoop is an AI-powered website builder that generates website code using large language models through the OpenRouter API and DeepSeek. It processes AI-generated responses and handles malformed JSON and Markdown-wrapped outputs to ensure reliable code generation. Built to simplify web development, GenLoop helps users accelerate website creation through AI-assisted development.',
        tech: ['AI Builder', 'DeepSeek', 'OpenRouter API', 'LLMs', 'Node.js', 'React'],
        features: ['AI code generation', 'DeepSeek & OpenRouter API integration', 'JSON and Markdown sanitization', 'Interactive website preview'],
        github: 'https://github.com/Mayank30-eng/GenLoop',
        demo: 'https://ai-website-builder-1-jzbi.onrender.com/',
      },
      {
        name: 'WanderLust',
        description: 'A full-stack vacation rental web app for listing, searching, reviewing, and reserving stays with authentication, Cloudinary image uploads, MongoDB, and Mapbox maps.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Mapbox', 'REST API'],
        features: ['Listings management', 'Search & booking', 'Cloudinary uploads', 'Mapbox integration', 'Reviews & ratings', 'User authentication'],
        github: 'https://github.com/Mayank30-eng/WanderLust-main-2',
        demo: 'https://wanderlust-main-ow9l.onrender.com/listings',
      },
      {
        name: 'HabitFlow',
        description: 'Modern habit tracking dashboard with streak visualization, progress charts, smooth animations, and a responsive UI.',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
        features: ['Habit tracking', 'Streak visualization', 'Progress charts', 'Animated UI'],
        github: 'https://github.com/Mayank30-eng/Momentum',
        demo: 'https://momentum-73a9.onrender.com/',
      },
    ],

    stack: 'Node.js, Express.js, MongoDB, React.js, JavaScript, Java, SQL, Git, Docker, Redis',
    available: true,
  };

  /* ─────────────────────────────────────────────────
     AI CHAT — Knowledge-based Q&A about Mayank
     ───────────────────────────────────────────────── */
  function generateAnswer(question) {
    const q = question.toLowerCase().trim();

    // Stack / technologies
    if (matches(q, ['stack', 'tech', 'technolog', 'tools', 'use', 'work with', 'languages'])) {
      return `Mayank's core tech stack:\n\n• Backend: ${PORTFOLIO.skills.backend.join(', ')}\n• Frontend: ${PORTFOLIO.skills.frontend.join(', ')}\n• Database: ${PORTFOLIO.skills.database.join(', ')}\n• Languages: ${PORTFOLIO.skills.programming.join(', ')}\n• Tools: ${PORTFOLIO.skills.tools.join(', ')}\n\nHis primary focus is backend development with Node.js and Express.js.`;
    }

    // Backend
    if (matches(q, ['backend', 'server', 'api', 'rest', 'node', 'express'])) {
      return `Mayank specializes in backend development. He works primarily with Node.js and Express.js, building REST APIs, authentication systems (JWT, bcrypt), and database architectures with MongoDB/Mongoose. He has experience with Docker, Redis, and secure API design patterns like idempotency keys and MongoDB transactions.`;
    }

    // Frontend
    if (matches(q, ['frontend', 'react', 'ui', 'interface', 'client'])) {
      return `On the frontend, Mayank works with React.js, JavaScript, HTML, CSS, and Tailwind CSS. He uses Vite for build tooling. While his primary focus is backend, he's capable of building complete full-stack applications with modern, responsive UIs.`;
    }

    // Projects
    if (matches(q, ['project', 'built', 'build', 'portfolio', 'work', 'made', 'created'])) {
      let response = `Mayank has built several projects:\n\n`;
      PORTFOLIO.projects.forEach((p, i) => {
        response += `${i + 1}. ${p.name} — ${p.description}\n   Tech: ${p.tech.join(', ')}\n   GitHub: ${p.github}\n   Demo: ${p.demo}\n\n`;
      });
      return response.trim();
    }

    // Specific projects
    if (matches(q, ['ledger', 'financial', 'backend ledger'])) {
      const p = PORTFOLIO.projects[0];
      return `${p.name}: ${p.description}\n\nTech: ${p.tech.join(', ')}\nGitHub: ${p.github}\nLive demo: ${p.demo}\nKey features: ${p.features.join(', ')}`;
    }

    if (matches(q, ['genloop', 'website builder', 'deepseek', 'openrouter', 'ai builder', 'llm'])) {
      const p = PORTFOLIO.projects[1];
      return `${p.name}: ${p.description}\n\nTech: ${p.tech.join(', ')}\nGitHub: ${p.github}\nLive demo: ${p.demo}\nKey features: ${p.features.join(', ')}`;
    }

    if (matches(q, ['wanderlust', 'vacation', 'rental', 'stay', 'booking', 'mapbox'])) {
      const p = PORTFOLIO.projects[2];
      return `${p.name}: ${p.description}\n\nTech: ${p.tech.join(', ')}\nGitHub: ${p.github}\nLive demo: ${p.demo}\nKey features: ${p.features.join(', ')}`;
    }

    if (matches(q, ['habit', 'habitflow', 'tracking', 'dashboard', 'momentum'])) {
      const p = PORTFOLIO.projects[3];
      return `${p.name}: ${p.description}\n\nTech: ${p.tech.join(', ')}\nGitHub: ${p.github}\nLive demo: ${p.demo}\nKey features: ${p.features.join(', ')}`;
    }

    // Availability / hire
    if (matches(q, ['available', 'hire', 'freelance', 'job', 'open', 'work together', 'opportunities'])) {
      return `Yes, Mayank is currently open to opportunities! He's looking for backend-focused or full-stack developer roles. Feel free to reach out via the contact section below.`;
    }

    // Education
    if (matches(q, ['education', 'degree', 'college', 'university', 'study', 'graduate', 'qualification'])) {
      return `Mayank is a Computer Science Engineering graduate. He has focused his career on backend development and full-stack web applications.`;
    }

    // Specialization
    if (matches(q, ['speciali', 'focus', 'expert', 'best at', 'strength'])) {
      return `Mayank specializes in backend development with Node.js and Express.js. His strengths include:\n\n• REST API design and development\n• Authentication & authorization (JWT, bcrypt)\n• Database architecture with MongoDB\n• Building scalable, secure server-side applications\n• Full-stack development with the MERN stack`;
    }

    // Who
    if (matches(q, ['who', 'about', 'tell me', 'introduce', 'yourself'])) {
      return `Mayank is a Computer Science Engineering graduate and backend-focused full stack developer. He builds scalable web applications, REST APIs, authentication systems, and modern web experiences using Node.js, Express.js, MongoDB, and React.js. He's passionate about clean, maintainable code and secure API design.`;
    }

    // Experience
    if (matches(q, ['experience', 'years', 'career', 'worked'])) {
      return `Mayank is a Computer Science Engineering graduate who has been building web applications with the MERN stack. His project portfolio demonstrates hands-on experience with backend API development, authentication systems, AI-powered tools, vacation rental platforms, and modern frontend dashboards.`;
    }

    // Database
    if (matches(q, ['database', 'mongo', 'sql', 'mysql', 'data'])) {
      return `Mayank works with MongoDB (with Mongoose ODM) as his primary database. He also has experience with SQL and MySQL. His projects demonstrate use of MongoDB transactions, schema design, and data modeling for production applications.`;
    }

    // Contact
    if (matches(q, ['contact', 'reach', 'email', 'connect', 'message', 'github', 'linkedin', 'profile'])) {
      return `You can reach Mayank through:\n\n• Email: ${PORTFOLIO.email}\n• GitHub: ${PORTFOLIO.github}\n• LinkedIn: ${PORTFOLIO.linkedin}\n• Contact form on this page\n\nHe typically responds within 24 hours.`;
    }

    // Hello / greetings
    if (matches(q, ['hello', 'hi', 'hey', 'greetings', 'good'])) {
      return `Hey there! 👋 I'm Mayank's portfolio assistant. Ask me about his tech stack, projects, skills, or anything else you'd like to know!`;
    }

    // Thank you
    if (matches(q, ['thank', 'thanks', 'thx'])) {
      return `You're welcome! Feel free to ask anything else about Mayank, or use the contact form below to get in touch directly.`;
    }

    // Default / unknown
    return `I can answer questions about Mayank's tech stack, projects, skills, education, and availability. Try asking:\n\n• "What is Mayank's tech stack?"\n• "Tell me about Mayank's projects"\n• "What backend technologies does Mayank use?"\n• "Is Mayank available for hire?"`;
  }

  function matches(text, keywords) {
    return keywords.some(kw => text.includes(kw));
  }

  /* ─────────────────────────────────────────────────
     DOM REFERENCES
     ───────────────────────────────────────────────── */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ─────────────────────────────────────────────────
     THEME TOGGLE
     ───────────────────────────────────────────────── */
  function initTheme() {
    const toggle = $('#theme-toggle');
    const sunIcon = toggle.querySelector('.icon-sun');
    const moonIcon = toggle.querySelector('.icon-moon');

    const saved = localStorage.getItem('theme');
    if (saved && saved !== 'dark') {
      document.documentElement.dataset.theme = saved;
      updateIcons(saved);
    }

    toggle.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
      updateIcons(next);
      toggle.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} theme`);
    });

    function updateIcons(theme) {
      if (theme === 'dark') {
        sunIcon.style.display = '';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = '';
      }
    }
  }

  /* ─────────────────────────────────────────────────
     MOBILE NAVIGATION
     ───────────────────────────────────────────────── */
  function initMobileNav() {
    const toggleBtn = $('#mobile-menu-toggle');
    const overlay = $('#mobile-overlay');
    const drawer = $('#mobile-drawer');
    const closeBtn = $('#mobile-close');

    function open() {
      overlay.classList.add('open');
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.classList.remove('open');
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);

    // Close on nav link click
    $$('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', close);
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        close();
      }
    });
  }

  /* ─────────────────────────────────────────────────
     ACTIVE SECTION TRACKING
     ───────────────────────────────────────────────── */
  function initSectionTracking() {
    const sections = ['top', 'projects', 'skills', 'contact'];
    const desktopLinks = $$('.nav-link[data-section]');
    const mobileLinks = $$('.mobile-nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          updateActiveNav(id);
        }
      });
    }, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    function updateActiveNav(activeId) {
      desktopLinks.forEach(link => {
        link.classList.toggle('nav-link--active', link.dataset.section === activeId);
      });

      const mobileMap = { top: 0, projects: 1, skills: 2, contact: 3 };
      mobileLinks.forEach((link, i) => {
        link.classList.toggle('mobile-nav-link--active', i === mobileMap[activeId]);
      });
    }

    // Check if at bottom of page
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        updateActiveNav('contact');
      }
    }, { passive: true });
  }

  /* ────────────────────────────────────────────────���
     GLITTER WARP — Starfield warp tunnel background
     ───────────────────────────────────────────────── */
  function initGlitterWarp() {
    const canvas = document.getElementById('glitter-warp');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Configuration
    const STAR_COUNT = 1200;
    const SPEED = 0.6;
    const TRAIL_LENGTH = 0.4;
    const MAX_DEPTH = 1500;
    const GLITTER_SPEED = 0.08;

    // Color palette — matches the portfolio accent
    const isDark = () => (document.documentElement.dataset.theme || 'dark') === 'dark';
    const COLORS = {
      dark: [
        'rgba(255,255,255,',       // white
        'rgba(255,180,190,',       // pale rose
        'rgba(255,51,68,',         // accent red
        'rgba(255,100,120,',       // coral red
        'rgba(220,180,255,',       // lavender
      ],
      light: [
        'rgba(0,0,0,',             // dark
        'rgba(120,30,40,',         // deep red
        'rgba(220,38,38,',         // accent red (light)
        'rgba(180,30,50,',         // deep coral
        'rgba(60,60,120,',         // deep lavender
      ],
    };

    // State
    let W, H;
    let stars = [];
    let mouseX = 0.5, mouseY = 0.5; // normalized [0..1]
    let animId;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    class Star {
      constructor() {
        this.reset(true);
      }

      reset(randomDepth = false) {
        // Spawn in a wide area around center
        this.x = (Math.random() - 0.5) * W * 2;
        this.y = (Math.random() - 0.5) * H * 2;
        this.z = randomDepth ? Math.random() * MAX_DEPTH : MAX_DEPTH;

        // Velocity variance
        this.vz = SPEED * (0.5 + Math.random() * 1.5);

        // Visual properties
        this.baseSize = 0.3 + Math.random() * 1.4;
        this.colorIdx = Math.floor(Math.random() * 5);

        // Glitter phase — each star twinkles independently
        this.glitterPhase = Math.random() * Math.PI * 2;
        this.glitterFreq = 0.5 + Math.random() * 2.5;
        this.glitterAmp = 0.3 + Math.random() * 0.7;

        // Trail
        this.prevSX = null;
        this.prevSY = null;
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    }

    function draw(time) {
      const dark = isDark();
      const colors = dark ? COLORS.dark : COLORS.light;
      const bgColor = dark ? 'rgba(5,5,5,0.15)' : 'rgba(250,250,250,0.15)';

      // Clear with semi-transparent fill for trail effect
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, W, H);

      // Vanishing point follows mouse with easing
      const vpX = W * (0.3 + mouseX * 0.4);
      const vpY = H * (0.3 + mouseY * 0.4);

      const t = time * 0.001; // seconds

      for (let i = 0; i < STAR_COUNT; i++) {
        const s = stars[i];

        // Move star toward camera
        s.z -= s.vz * (prefersReducedMotion ? 0.15 : 1);
        if (s.z <= 1) {
          s.reset();
          continue;
        }

        // Perspective projection
        const scale = 300 / s.z;
        const sx = vpX + s.x * scale;
        const sy = vpY + s.y * scale;

        // Cull offscreen
        if (sx < -20 || sx > W + 20 || sy < -20 || sy > H + 20) {
          s.reset();
          continue;
        }

        // Depth-based alpha and size
        const depthFactor = 1 - s.z / MAX_DEPTH;
        const size = s.baseSize * scale * 0.5;

        // Glitter effect — sinusoidal twinkling
        const glitter = 0.5 + s.glitterAmp * Math.sin(t * s.glitterFreq + s.glitterPhase);
        const alpha = Math.min(1, depthFactor * glitter * 1.2);

        if (alpha < 0.02) continue;

        const color = colors[s.colorIdx] + alpha.toFixed(3) + ')';

        // Draw trail (warp streak)
        if (s.prevSX !== null && !prefersReducedMotion && size > 0.5) {
          const trailAlpha = alpha * TRAIL_LENGTH;
          if (trailAlpha > 0.01) {
            ctx.beginPath();
            ctx.moveTo(s.prevSX, s.prevSY);
            ctx.lineTo(sx, sy);
            ctx.strokeStyle = colors[s.colorIdx] + trailAlpha.toFixed(3) + ')';
            ctx.lineWidth = size * 0.6;
            ctx.stroke();
          }
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.3, size), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Sparkle burst for close/bright stars
        if (depthFactor > 0.7 && glitter > 0.85 && size > 1.2) {
          const sparkAlpha = (alpha * 0.4).toFixed(3);
          const sparkSize = size * 3;
          const gradient = ctx.createRadialGradient(sx, sy, 0, sx, sy, sparkSize);
          gradient.addColorStop(0, colors[s.colorIdx] + sparkAlpha + ')');
          gradient.addColorStop(1, colors[s.colorIdx] + '0)');
          ctx.beginPath();
          ctx.arc(sx, sy, sparkSize, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        s.prevSX = sx;
        s.prevSY = sy;
      }

      animId = requestAnimationFrame(draw);
    }

    // Mouse tracking (shared with torch effect)
    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    });

    // Resize handler
    window.addEventListener('resize', () => {
      resize();
    });

    resize();
    initStars();
    requestAnimationFrame(draw);
  }

  /* ─────────────────────────────────────────────────
     BACKGROUND TORCH EFFECT
     ───────────────────────────────────────────────── */
  function initTorchEffect() {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx, cy = my;

    window.addEventListener('pointermove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    window.addEventListener('pointerleave', () => {
      mx = -9999;
      my = -9999;
    });

    function animate() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      document.documentElement.style.setProperty('--mx', cx + 'px');
      document.documentElement.style.setProperty('--my', cy + 'px');
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  /* ─────────────────────────────────────────────────
     CHAT TERMINAL
     ───────────────────────────────────────────────── */
  function initChat() {
    const messagesEl = $('#chat-messages');
    const form = $('#chat-form');
    const input = $('#chat-input');
    const sendBtn = $('#chat-send');
    const chipsEl = $('#chat-chips');
    let isProcessing = false;

    // Handle form submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const question = input.value.trim();
      if (!question || isProcessing) return;
      handleQuestion(question);
    });

    // Handle chip clicks
    $$('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const question = chip.dataset.question;
        if (!question || isProcessing) return;
        handleQuestion(question);
      });
    });

    function handleQuestion(question) {
      isProcessing = true;
      input.value = '';
      input.disabled = true;
      sendBtn.disabled = true;
      $$('.chip').forEach(c => c.disabled = true);

      // Add user message
      addMessage(question, 'you', 'chat-msg--user');

      // Show typing indicator
      const typingEl = showTyping();

      // Simulate processing delay for natural feel
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        typingEl.remove();

        try {
          const answer = generateAnswer(question);
          addMessage(answer, '// mayank.dev', '');
        } catch (err) {
          addMessage('Sorry, something went wrong. Please try again.', '// error', 'chat-msg--error');
        }

        isProcessing = false;
        input.disabled = false;
        sendBtn.disabled = false;
        $$('.chip').forEach(c => c.disabled = false);
        input.focus();
      }, delay);
    }

    function addMessage(text, label, extraClass) {
      const msg = document.createElement('div');
      msg.className = `chat-msg ${extraClass || ''}`.trim();
      msg.innerHTML = `
        <div class="chat-msg-label">${escapeHtml(label)}</div>
        <div class="chat-msg-text">${escapeHtml(text)}</div>
      `;
      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function showTyping() {
      const indicator = document.createElement('div');
      indicator.className = 'typing-indicator';
      indicator.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      `;
      messagesEl.appendChild(indicator);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return indicator;
    }

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
  }

  /* ─────────────────────────────────────────────────
     CONTACT FORM
     ───────────────────────────────────────────────── */
  function initContactForm() {
    const form = $('#contact-form');
    const status = $('#form-status');
    const submitBtn = $('#contact-submit');

    // Rate limit: 1 submission per 2 minutes (120000ms)
    const RATE_LIMIT_MS = 120000;
    const RATE_LIMIT_KEY = 'portfolio_form_last_submit';

    function isRateLimited() {
      const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
      if (!lastSubmit) return false;
      const elapsed = Date.now() - parseInt(lastSubmit, 10);
      if (elapsed < RATE_LIMIT_MS) {
        const remaining = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
        showStatus(`Please wait ${remaining}s before sending another message.`, 'error');
        return true;
      }
      return false;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = form.querySelector('#contact-name').value.trim();
      const email = form.querySelector('#contact-email').value.trim();
      const msg = form.querySelector('#contact-msg').value.trim();

      if (!name || !email || !msg) {
        showStatus('Please fill in all required fields.', 'error');
        return;
      }

      if (msg.length < 10) {
        showStatus('Message must be at least 10 characters.', 'error');
        return;
      }

      // Check rate limit
      if (isRateLimited()) return;

      // Disable button & show loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'sending…';

      try {
        const formData = new FormData(form);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        console.log('Web3Forms response:', result);

        if (result.success) {
          // Record submission time for rate limiting
          localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
          showStatus('✅ Message sent! Mayank will get back to you within 24 hours.', 'success');
          form.reset();
        } else {
          showStatus(`❌ ${result.message || 'Failed to send. Please try again or email directly.'}`, 'error');
        }
      } catch (err) {
        console.error('Submission error:', err);
        showStatus('❌ Network error. Please check your connection and try again.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'send message';
      }
    });

    function showStatus(message, type) {
      status.textContent = message;
      status.className = `form-status ${type}`;
      setTimeout(() => {
        status.textContent = '';
        status.className = 'form-status';
      }, 6000);
    }
  }

  /* ─────────────────────────────────────────────────
     SCROLL REVEAL ANIMATIONS
     ───────────────────────────────────────────────── */
  function initScrollReveal() {
    const revealElements = [
      ...$$('.project-card'),
      ...$$('.skill-group'),
      ...$$('.section-header'),
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    });

    revealElements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 500ms ${i * 60}ms ease-out, transform 500ms ${i * 60}ms ease-out`;
      observer.observe(el);
    });
  }

  /* ─────────────────────────────────────────────────
     INITIALIZE
     ───────────────────────────────────────────────── */
  function init() {
    initTheme();
    initMobileNav();
    initSectionTracking();
    initGlitterWarp();
    initTorchEffect();
    initChat();
    initContactForm();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
