import './Decorations.css'

function Decorations() {
  return (
    <div className="decorations">
      {/* Floating coffee cups */}
      <div className="coffee-cup coffee-1">
        <div className="cup-body">
          <div className="latte-art"></div>
        </div>
        <div className="cup-handle"></div>
        <div className="steam">
          <span>~</span>
          <span>~</span>
          <span>~</span>
        </div>
      </div>

      <div className="coffee-cup coffee-2">
        <div className="cup-body">
          <div className="latte-art"></div>
        </div>
        <div className="cup-handle"></div>
        <div className="steam">
          <span>~</span>
          <span>~</span>
        </div>
      </div>

      <div className="coffee-cup coffee-3">
        <div className="cup-body">
          <div className="latte-art"></div>
        </div>
        <div className="cup-handle"></div>
        <div className="steam">
          <span>~</span>
          <span>~</span>
        </div>
      </div>

      <div className="coffee-cup coffee-4">
        <div className="cup-body">
          <div className="latte-art"></div>
        </div>
        <div className="cup-handle"></div>
      </div>

      {/* Sparkle decorations */}
      <div className="sparkle sparkle-1">✦</div>
      <div className="sparkle sparkle-2">✦</div>
      <div className="sparkle sparkle-3">✦</div>
      <div className="sparkle sparkle-4">+</div>
      <div className="sparkle sparkle-5">+</div>
      <div className="sparkle sparkle-6">+</div>
      <div className="sparkle sparkle-7">✦</div>
      <div className="sparkle sparkle-8">+</div>
      <div className="sparkle sparkle-9">✦</div>
      <div className="sparkle sparkle-10">+</div>
      <div className="sparkle sparkle-11">◆</div>
      <div className="sparkle sparkle-12">◆</div>

      {/* Dotted lines */}
      <div className="dotted-line line-1"></div>
      <div className="dotted-line line-2"></div>
      <div className="dotted-line line-3"></div>
      <div className="dotted-line line-4"></div>
      <div className="dotted-line line-5"></div>

      {/* Small window decorations */}
      <div className="window-icon window-1">
        <div className="window-bar"></div>
        <div className="window-content"></div>
      </div>

      <div className="window-icon window-2">
        <div className="window-bar"></div>
        <div className="window-content"></div>
      </div>

      <div className="window-icon window-3">
        <div className="window-bar"></div>
        <div className="window-content"></div>
      </div>

      <div className="window-icon window-4">
        <div className="window-bar"></div>
        <div className="window-content"></div>
      </div>

      {/* Folder icons */}
      <div className="folder-icon folder-1">
        <div className="folder-tab"></div>
        <div className="folder-body"></div>
      </div>

      <div className="folder-icon folder-2">
        <div className="folder-tab"></div>
        <div className="folder-body"></div>
      </div>

      {/* Progress bars */}
      <div className="progress-bar progress-1">
        <div className="progress-fill"></div>
      </div>

      <div className="progress-bar progress-2">
        <div className="progress-fill"></div>
      </div>

      {/* Small clouds */}
      <div className="cloud cloud-1">
        <div className="cloud-part"></div>
        <div className="cloud-part"></div>
        <div className="cloud-part"></div>
      </div>

      <div className="cloud cloud-2">
        <div className="cloud-part"></div>
        <div className="cloud-part"></div>
      </div>

      {/* Cursor icons */}
      <div className="cursor cursor-1">➜</div>
      <div className="cursor cursor-2">➜</div>

      {/* Pixel diamonds */}
      <div className="pixel-shape diamond-1">◇</div>
      <div className="pixel-shape diamond-2">◇</div>
      <div className="pixel-shape diamond-3">◇</div>

      {/* Loading spinners */}
      <div className="loading-spinner spinner-1">⟳</div>
      <div className="loading-spinner spinner-2">⟳</div>

      {/* Top middle decorations */}
      <div className="pixel-heart heart-1">♥</div>
      <div className="pixel-heart heart-2">♥</div>
      <div className="code-bracket bracket-1">&lt;/&gt;</div>
      <div className="code-bracket bracket-2">{'{}'}</div>
      <div className="pixel-star star-1">★</div>
      <div className="pixel-star star-2">★</div>
      <div className="pixel-star star-3">☆</div>
      
      {/* More sparkles for variety */}
      <div className="sparkle sparkle-13">✦</div>
      <div className="sparkle sparkle-14">+</div>
      <div className="sparkle sparkle-15">◆</div>
      <div className="sparkle sparkle-16">✦</div>
      
      {/* Pixel plants */}
      <div className="pixel-plant plant-1">
        <div className="plant-pot"></div>
        <div className="plant-stem"></div>
        <div className="plant-leaf"></div>
      </div>
      
      <div className="pixel-plant plant-2">
        <div className="plant-pot"></div>
        <div className="plant-stem"></div>
        <div className="plant-leaf"></div>
      </div>
      
      {/* Terminal windows */}
      <div className="terminal-window terminal-1">
        <div className="terminal-bar"></div>
        <div className="terminal-text">$ _</div>
      </div>
      
      <div className="terminal-window terminal-2">
        <div className="terminal-bar"></div>
        <div className="terminal-text">&gt; _</div>
      </div>
      
      {/* Geometric shapes */}
      <div className="geometric-shape triangle-1">▲</div>
      <div className="geometric-shape triangle-2">▼</div>
      <div className="geometric-shape square-1">■</div>
      <div className="geometric-shape square-2">□</div>
      <div className="geometric-shape circle-1">●</div>
      <div className="geometric-shape circle-2">○</div>
    </div>
  )
}

export default Decorations
