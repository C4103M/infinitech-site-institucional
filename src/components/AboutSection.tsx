import { motion } from "framer-motion";
import { Target, TrendingUp, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-5">
              Jovens profissionais,{" "}
              <span className="text-gradient">resultados reais.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Somos uma Empresa Júnior vinculada ao curso de Tecnologia, 
              formada por estudantes apaixonados por resolver problemas reais 
              através do digital. Nosso foco é entregar soluções de alto 
              impacto com custos acessíveis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atuamos com desenvolvimento web moderno e gestão estratégica 
              de tráfego pago, ajudando empresas a crescerem no ambiente 
              digital com presença profissional e campanhas que convertem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              { icon: Target, label: "+50 projetos", desc: "entregues com excelência" },
              { icon: TrendingUp, label: "+R$200k", desc: "em resultados gerados para clientes" },
              { icon: Globe, label: "2 especialidades", desc: "Web Dev & Tráfego Pago" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-glass rounded-lg p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="text-primary" size={22} />
                </div>
                <div>
                  <p className="font-display font-bold text-xl">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
