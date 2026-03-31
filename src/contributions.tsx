import './css/contributions.css';

function Contributions() {

    return (
        <div className="contribution">
          <div className="section-header">
            <span className="section-label">Open Source</span>
            <div className="section-line"></div>
          </div>
          <div className="contribution-card">
            <div className="contribution-left">
              <p className="contribution-eyebrow">Merged Contribution</p>
              <p className="contribution-title">Microsoft PowerShell</p>
              <p className="contribution-desc">
                Code contribution to the PowerShell open-source project, reviewed and merged
                by Microsoft maintainers. Production-level code under professional review standards.
              </p>
            </div>
            <a className="contribution-badge" href="https://github.com/PowerShell/PowerShell">↗ View on GitHub</a>
          </div>
        </div>
    );

}

export default Contributions;
