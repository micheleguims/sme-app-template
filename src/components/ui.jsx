export function Button({ variant = "primary", size = "md", className = "", children, ...props }) {
  return (
    <button
      className={`ui-button ui-button--${variant} ui-button--${size} ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({ tone = "neutral", children, className = "" }) {
  return <span className={`ui-badge ui-badge--${tone} ${className}`}>{children}</span>;
}

export function Card({ title, description, children, className = "", as: Component = "section" }) {
  return (
    <Component className={`ui-card ${className}`}>
      {(title || description) && (
        <div className="ui-card__header">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
      {children}
    </Component>
  );
}

export function TextField({ label, id, hint, error, ...props }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className="ui-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-invalid={Boolean(error)} aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined} {...props} />
      {hint && <p id={hintId} className="ui-field__hint">{hint}</p>}
      {error && <p id={errorId} className="ui-field__error" role="alert">{error}</p>}
    </div>
  );
}

export function Notice({ tone = "info", title, children }) {
  return (
    <div className={`ui-notice ui-notice--${tone}`} role={tone === "error" ? "alert" : "status"}>
      {title && <strong>{title}</strong>}
      <p>{children}</p>
    </div>
  );
}
