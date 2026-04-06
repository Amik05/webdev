function Footer({ tech }: { tech: string[] }) {
  return (
    <>
      <div>
        |
        {tech.map((tech, index) => (
          <span key={index}> {tech} |</span>
        ))}
      </div>

      <p>Current Year {new Date().getFullYear()}</p>
    </>
  );
}

export default Footer;
