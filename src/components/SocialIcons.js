function SocialIcons() {
  // ... 现有代码 ...

  return (
    <div className="social-icons">
      {/* 只保留 Twitter、GitHub 和 Email 图标 */}
      <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
        <img src="/twitter-icon.png" alt="Twitter" />
      </a>
      <a href="https://github.com/your_github" target="_blank" rel="noopener noreferrer">
        <img src="/github-icon.png" alt="GitHub" />
      </a>
      <a href="mailto:your_email@example.com">
        <img src="/email-icon.png" alt="Email" />
      </a>
    </div>
  );
}

// ... 导出组件 ...