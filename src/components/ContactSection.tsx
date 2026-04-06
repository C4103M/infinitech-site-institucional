import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const challenges = [
  "Site lento ou desatualizado",
  "Poucas vendas online",
  "Começando do zero",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.challenge) {
      toast({
        title: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em até 24h.",
    });
    setForm({ name: "", email: "", company: "", challenge: "" });
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground">
            Receba um diagnóstico do seu negócio em até 24h.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass rounded-xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">
                Nome *
              </label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                maxLength={100}
                className="bg-background/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">
                E-mail *
              </label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                maxLength={255}
                className="bg-background/50 border-border"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">
              Empresa
            </label>
            <Input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Nome da empresa (opcional)"
              maxLength={100}
              className="bg-background/50 border-border"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">
              Qual seu principal desafio hoje? *
            </label>
            <div className="flex flex-wrap gap-3">
              {challenges.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setForm({ ...form, challenge: c })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    form.challenge === c
                      ? "bg-primary/15 border-primary text-foreground"
                      : "bg-background/30 border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Enviar Mensagem
            <Send className="ml-2" size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
