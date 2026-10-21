import { Signature } from "@/components/ui/signature";

function Footer() {
  return (
    <section
      style={{
        minHeight: "250px",
        background: "#080808",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "40px 20px",
      }}
    >
      

      <Signature
        text="Anjali Patel"
        color="rgb(59, 59, 192)"
        fontSize={25}
        duration={3}
        delay={0}
        fontUrl="/LastoriaBoldRegular.otf"
        inView
        once={false}
      />

      
<p
  style={{
    color: "#b8a8ff",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "13px",
    letterSpacing: "1px",
  }}
>
  Made with ♥︎
</p>
    </section>
  );
}

export default Footer;