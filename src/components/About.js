
export const About = ({ mode }) => {
  const textColor = mode === 'dark' ? 'white' : '#042743'

  return (
    <div className="container" style={{ color: textColor }}>
      <h1>About TextUtils</h1>

      <p>
        TextUtils is a lightweight, client-side utility for manipulating and
        analyzing text quickly. It's designed for writers, developers, and
        anyone who needs fast text transformations without leaving the browser.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Convert text to uppercase, lowercase, or sentence case</li>
        <li>Remove extra spaces and trim lines</li>
        <li>Copy, clear, and preview text instantly</li>
        <li>Quick word & character count and reading time estimate</li>
      </ul>

      <h2>How to Use</h2>
      <p>
        Paste or type text into the main editor, then choose an action from the
        toolbar. Results are shown instantly — no server round-trip required.
      </p>

      <h2>Tech & Contribution</h2>
      <p>
        Built with React and plain CSS. Contributions, bug reports, and
        improvements are welcome — open a pull request or issue on the
        repository.
      </p>

      <h2>Contact</h2>
      <p>For questions or feedback, please use the project README or create an issue.</p>
    </div>
  )
}
