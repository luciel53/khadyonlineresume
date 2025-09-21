"use client";

import { gsap } from "gsap";
import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Download,
  Eye,
  ChevronDown,
  ChevronUp,
  Database,
  BarChart3,
  Code,
  Lightbulb,
  Users,
  Target,
  BookOpen,
  Briefcase,
  Award,
  Globe,
  Star,
} from "lucide-react";
import Image from "next/image";

const CVKhadyThiam = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const [expandedExperience, setExpandedExperience] = useState<
    Record<number, boolean>
  >({});
  const [isLoaded, setIsLoaded] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef([]);
  const skillRefs = useRef([]);
  const formationRefs = useRef([]);

  // GSAP animations
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power3.out" },
      });

      // header animation
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0 },
          0.2
        );
      }

      // navbar animation
      if (navRef.current) {
        tl.fromTo(
          navRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          0.6
        );
      }

      // content animation
      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          1
        );
      }

      setIsLoaded(true);
    }
  }, []);

  // animation when change of section
  useEffect(() => {
    if (isLoaded) {
      const elements = document.querySelectorAll<HTMLElement>(
        ".animate-section-change"
      );
      elements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";

        setTimeout(() => {
          el.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 100);
      });
    }
  }, [activeSection, isLoaded]);

  const toggleExperience = (index: number) => {
    setExpandedExperience((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const experiences = [
    {
      title: "Développeur PowerBI et analyse des données",
      company: "STMicroelectronics",
      location: "Grenoble",
      period: "Janvier - Juillet 2025",
      color: "from-blue-500 to-cyan-500",
      tasks: [
        "Analyse, uniformisation et traitement des bases de données avec Python",
        "Automatisation et fiabilisation des flux de données vers Power BI",
        "Développement d'outils de visualisation dynamique avec Power BI (DAX, Power Query)",
        "Conception de tableaux de bord interactifs pour l'analyse stratégique",
      ],
    },
    {
      title: "Gestionnaire de données",
      company: "ENEDIS",
      location: "Paris",
      period: "Février - Juin 2024",
      color: "from-sky-500 to-blue-500",
      tasks: [
        "Suivi et analyse des interventions de sécurisation des espaces de livraison",
        "Actualisation des informations de cartographie de transformateurs",
      ],
    },
    {
      title: "Gestionnaire de données",
      company: "Système U",
      location: "Paris",
      period: "Août - Décembre 2023",
      color: "from-cyan-500 to-sky-500",
      tasks: [
        "Gestion et maintenance des données : insertion, mise à jour, nettoyage",
        "Qualification et contrôle de cohérence, fiabilité et intégrité",
        "Analyses ciblées : audits et vérifications pour l'exploitation des données",
      ],
    },
    {
      title: "Chargée de projet données",
      company: "Plaine d'Avenir 78",
      location: "Paris",
      period: "Mai - Août 2023",
      color: "from-blue-400 to-cyan-400",
      tasks: [
        "Analyse du besoin d'une base de données « clients »",
        "Développement d'un outil pour la base de données",
        "Gestion de la base de données",
      ],
    },
    {
      title: "Chargée d'analyse statistique",
      company: "UMR AMURE",
      location: "Brest",
      period: "Mai - Novembre 2021",
      color: "from-sky-400 to-blue-400",
      tasks: [
        "Saisie et codage des réponses d'enquête sur les habitants de Brest",
        "Création d'un site internet avec RShiny",
        "Analyse et traitement des données avec R (ACP et ACM)",
        "Visualisation de la base de données avec R",
      ],
    },
    {
      title: "Chargée d'étude statistique",
      company: "BDA",
      location: "Dakar",
      period: "2016 - 2018",
      color: "from-cyan-400 to-sky-400",
      tasks: [
        "Création et diffusion de questionnaires",
        "Analyse et visualisation des données",
      ],
    },
  ];

  const formations = [
    {
      title: "Formation Data Analyst",
      school: "Campus Numérique in the Alps",
      location: "Grenoble",
      year: "2024-2025",
      level: "Spécialisation",
    },
    {
      title: "Certificat Développeur Web",
      school: "Holberton School",
      location: "Laval",
      year: "2022-2023",
      level: "Certificat",
    },
    {
      title: "Master Économie Appliquée",
      school: "Institut Agro Rennes-Angers",
      location: "",
      year: "2019-2021",
      level: "Master",
    },
    {
      title: "Licence pro Analyse Statistique & Économie",
      school: "CREFDES",
      location: "Dakar",
      year: "2013-2016",
      level: "Licence Pro",
    },
  ];

  const competences = [
    {
      category: "Langages & Programmation",
      skills: ["Python (Pandas, NumPy, Matplotlib)", "R", "SQL"],
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Analyse statistique & Data Science",
      skills: [
        "Régressions",
        "ACP/ACM",
        "Analyses descriptives et exploratoires",
      ],
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Visualisation & Business Intelligence",
      skills: ["PowerBI (DAX, Power Query)", "Tableau", "RShiny", "Matplotlib"],
      icon: <Eye className="w-5 h-5" />,
      color: "from-sky-500 to-cyan-500",
    },
    {
      category: "Traitement & gestion de données",
      skills: [
        "ETL/ELT",
        "Nettoyage de données",
        "Transformation et automatisation",
      ],
      icon: <Database className="w-5 h-5" />,
      color: "from-blue-400 to-sky-500",
    },
    {
      category: "Bases de données",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"],
      icon: <Database className="w-5 h-5" />,
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const qualites = [
    {
      name: "Créativité",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Approche innovante des problèmes",
    },
    {
      name: "Adaptation",
      icon: <Target className="w-5 h-5" />,
      description: "Flexibilité face aux changements",
    },
    {
      name: "Relations",
      icon: <Users className="w-5 h-5" />,
      description: "Excellentes compétences relationnelles",
    },
    {
      name: "Équipe",
      icon: <Users className="w-5 h-5" />,
      description: "Esprit d'équipe",
    },
    {
      name: "Résultats",
      icon: <Target className="w-5 h-5" />,
      description: "Orientation résultats",
    },
  ];

  return (
    <div className="max-h-screen md:bg-blue-100 md:from-blue-300 md:via-gray-200 md:to-blue-400 overflow-x-hidden">
      <Image
        src="/images/nasa.jpg"
        alt="Background"
        fill
        className=" object-cover"
        priority
      />

      {/* Header */}
      <div ref={headerRef} className="relative z-10  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-blue-700/10 to-blue-700/20"></div>

        <div className="container mx-auto px-6 py-6 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
            <div className="group relative order-1 lg:order-1">
              <div className="w-24 h-24 md:w-56 md:h-56 rounded-full relative overflow-hidden group-hover:scale-105 transition-all duration-500 border-4 border-white/30 shadow-2xl ring-4 ring-white/10">
                <Image
                  src="/images/portraitkhady.png"
                  alt="Khady Thiam - Data Analyst"
                  fill
                  priority
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/15 group-hover:from-white/15 transition-all duration-300"></div>
                <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/40 rounded-full transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-2">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Khady THIAM
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-200 font-light tracking-wide">
                    Data Analyst
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-blue-400 to-indigo-400"></div>
                </div>
              </div>

              <p className="text-slate-200 leading-relaxed max-w-4xl text-lg md:text-xl lg:text-xl font-light">
                Passionnée par la data science, je maîtrise la transformation
                des données en insights exploitables. Mon parcours académique et
                mes expériences m'ont permis d'acquérir de solides compétences
                en analyse et visualisation.
              </p>

              <div className="hidden md:flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <span className="text-lg font-medium text-white">
                    Python • R • SQL
                  </span>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <span className="text-lg font-medium text-white">
                    PowerBI • Tableau
                  </span>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <span className="text-lg font-medium text-white">
                    ETL • Visualisation
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-5 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl order-3 lg:order-3">
              <div className="flex items-center gap-4 text-slate-200 hover:text-white transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+33 7 53 18 00 93</span>
              </div>

              <div className="flex items-center gap-4 text-slate-200 hover:text-white transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">Khadymor.thiam@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-slate-200 hover:text-white transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-medium">
                  linkedin.com/in/khady-thiam-10475b135
                </span>
              </div>

              <div className="flex items-center gap-4 text-slate-200 hover:text-white transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">France</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        ref={navRef}
        className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-blue-100/50 overflow-x-auto"
      >
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* active section */}
            <div
              className="absolute bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: "80px",
                left:
                  activeSection === "experience"
                    ? "20px"
                    : activeSection === "competences"
                    ? "150px"
                    : activeSection === "formation"
                    ? "277px"
                    : "408px",
              }}
            ></div>

            <nav className="flex gap-2 w-0 py-3">
              {[
                {
                  id: "experience",
                  label: "Expérience",
                  icon: <Briefcase className="w-5 h-5" />,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  id: "competences",
                  label: "Compétences",
                  icon: <BarChart3 className="w-5 h-5" />,
                  color: "from-indigo-500 to-blue-500",
                },
                {
                  id: "formation",
                  label: "Formation",
                  icon: <BookOpen className="w-5 h-5" />,
                  color: "from-sky-500 to-blue-500",
                },
                {
                  id: "qualites",
                  label: "Qualités",
                  icon: <Award className="w-5 h-5" />,
                  color: "from-blue-600 to-indigo-600",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group relative flex flex-col items-center gap-2 px-6 py-4 rounded-t-2xl font-medium transition-all duration-500 min-w-[120px] ${
                    activeSection === item.id
                      ? "text-white transform -translate-y-2 shadow-xl"
                      : "text-slate-600 hover:text-blue-600 hover:-translate-y-1"
                  }`}
                >
                  {/* background for active section */}
                  {activeSection === item.id && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-t-2xl shadow-lg`}
                    ></div>
                  )}

                  {/* Hover effect on inactive sections */}
                  {activeSection !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}

                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-white/20 scale-110"
                          : "bg-slate-100 group-hover:bg-blue-100 group-hover:scale-105"
                      }`}
                    >
                      <div
                        className={
                          activeSection === item.id
                            ? "text-white"
                            : "text-slate-600 group-hover:text-blue-600"
                        }
                      >
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>

                  {/* floats for active sections */}
                  {activeSection === item.id && (
                    <>
                      <div className="absolute -top-2 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                      <div className="absolute -top-1 right-1/4 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"></div>
                    </>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="container mx-auto px-6 py-12 relative z-10 bg-blue-100"
      >
        {/* Experience Section */}
        {activeSection === "experience" && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-4 animate-section-change">
                Expérience Professionnelle
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-section-change"></div>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="animate-section-change relative group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-cyan-200 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500"></div>

                <div className="ml-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-sky-100 overflow-hidden group-hover:border-sky-300">
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

                  <div
                    className="p-8 cursor-pointer"
                    onClick={() => toggleExperience(index)}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1 space-y-3">
                        <h4 className="text-2xl font-bold text-sky-800 group-hover:text-blue-700 transition-colors">
                          {exp.title}
                        </h4>
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <p className="text-xl text-sky-600 font-semibold">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-sky-500">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                          <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 group">
                        <span className="text-sm text-sky-500 font-medium">
                          Voir détails
                        </span>
                        <div
                          className={`p-2 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-all duration-300 ${
                            expandedExperience[index] ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown className="w-5 h-5 text-sky-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {expandedExperience[index] && (
                    <div
                      id={`exp-detail-${index}`}
                      className="px-8 pb-8 border-t border-sky-100 bg-gradient-to-br from-sky-25 to-blue-25"
                    >
                      <div className="space-y-4 mt-6">
                        <h5 className="text-lg font-semibold text-sky-800 mb-4">
                          Missions principales :
                        </h5>
                        <div className="grid gap-3">
                          {exp.tasks.map((task, taskIndex) => (
                            <div
                              key={taskIndex}
                              className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-sky-100 hover:border-sky-200 transition-colors group/task"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 flex-shrink-0 group-hover/task:scale-125 transition-transform"></div>
                              <span className="text-sky-700 leading-relaxed">
                                {task}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Competences Section */}
        {activeSection === "competences" && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-4 animate-section-change">
                Compétences Techniques
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-section-change"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {competences.map((comp, index) => (
                <div key={index} className="animate-section-change group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-sky-100 hover:border-sky-300 relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${comp.color}`}
                    ></div>

                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${comp.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {comp.icon}
                      </div>
                      <h4 className="text-xl font-bold text-sky-800">
                        {comp.category}
                      </h4>
                    </div>

                    <div className="grid gap-3">
                      {comp.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-sky-100/50 hover:border-sky-200 transition-all group/skill"
                        >
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex-shrink-0 group-hover/skill:scale-125 transition-transform"></div>
                          <span className="text-sky-700 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Formation Section */}
        {activeSection === "formation" && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-4 animate-section-change">
                Parcours de Formation
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-section-change"></div>
            </div>

            <div className="space-y-6">
              {formations.map((formation, index) => (
                <div
                  key={index}
                  className="animate-section-change relative group"
                >
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-cyan-200 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500"></div>

                  <div className="ml-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-sky-100 hover:border-sky-300 relative">
                    <div className="absolute -left-12 top-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1 space-y-3">
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                          {formation.level}
                        </div>
                        <h4 className="text-2xl font-bold text-sky-800 group-hover:text-blue-700 transition-colors">
                          {formation.title}
                        </h4>
                        <p className="text-xl text-sky-600 font-semibold">
                          {formation.school}
                        </p>
                        {formation.location && (
                          <p className="text-sky-500 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {formation.location}
                          </p>
                        )}
                      </div>

                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                        {formation.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Qualites Section */}
        {activeSection === "qualites" && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-4 animate-section-change">
                Qualités & Soft Skills
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-section-change"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {qualites.map((qualite, index) => (
                <div key={index} className="animate-section-change group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-sky-100 hover:border-sky-300 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>

                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {qualite.icon}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-sky-800 mb-2 group-hover:text-blue-700 transition-colors">
                      {qualite.name}
                    </h4>
                    <p className="text-sky-600 text-sm leading-relaxed">
                      {qualite.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-sky-800 mb-8 flex items-center justify-center gap-3 animate-section-change">
                <Globe className="w-6 h-6" />
                Langues
              </h4>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="animate-section-change group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-sky-100 hover:border-sky-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                        FR
                      </div>
                      <h5 className="text-xl font-bold text-sky-800">
                        Français
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="animate-section-change group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-sky-100 hover:border-sky-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        EN
                      </div>
                      <h5 className="text-xl font-bold text-sky-800">
                        Anglais
                      </h5>
                      <span className="text-sm text-sky-600 font-medium">
                        Professionnel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Associations */}
            <div>
              <h4 className="text-2xl font-bold text-sky-800 mb-8 flex items-center justify-center gap-3 animate-section-change">
                <Users className="w-6 h-6" />
                Engagement Associatif
              </h4>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="animate-section-change group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-sky-100 hover:border-sky-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white shadow-lg flex-shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-sky-800 mb-2 group-hover:text-blue-700 transition-colors">
                          L'École de la Paix – Grenoble
                        </h5>
                        <p className="text-sky-700 leading-relaxed">
                          Gestion de bases de données IA et coordination de
                          projets
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-section-change group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-sky-100 hover:border-sky-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white shadow-lg flex-shrink-0">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-sky-800 mb-2 group-hover:text-blue-700 transition-colors">
                          Université Inter-Âges du Dauphiné
                        </h5>
                        <p className="text-sky-700 leading-relaxed">
                          Assistance pour les cours d'informatique (Excel,
                          Python)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-gradient-to-r from-blue-400 via-sky-700 to-sky-800 text-white py-12 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-sky-300"></div>
              <Star className="w-6 h-6 text-sky-300" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-sky-300"></div>
            </div>
            <p className="text-xl font-light text-blue-100">
              © 2025 Khady Thiam - Data Analyst
            </p>
            <p className="text-sky-200 text-sm">
              Transformons vos données en avantage concurrentiel
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CVKhadyThiam;
