import './ArrowButton.scss'

export const ArrowButtonNext = (props) => {
    return <div className="container">
    <button onClick={props.onClick} className="animated-arrow ">
      <span className="the-arrow -left">
        <span className="shaft" />
      </span>
      <span className="main">
        <span className="text">{props.children}</span>
        <span className="the-arrow -right">
          <span className="shaft" />
        </span>
      </span>
    </button>
</div>
};
export const ArrowButtonPrev = (props) => {
    return <div className="container prev">
    <button onClick={props.onClick} className="animated-arrow">
      <span className="the-arrow -left">
        <span className="shaft" />
      </span>
      <span className="main">
        <span className="the-arrow -right prev">
          <span className="shaft" />
        </span>
        <span className="text">{props.children}</span>
      </span>
    </button>
</div>
};

