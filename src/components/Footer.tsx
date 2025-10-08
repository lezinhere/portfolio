const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Lezin VM. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
