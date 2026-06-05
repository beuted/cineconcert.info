export const VIDEOS = {
  parisQuiDort: {
    id: 'rteafi1IdGc',
    title: 'Paris qui dort – Cineconcert',
  },
  septAnsDeMalheur: {
    id: 'DDytxP-D-iw',
    title: 'Clip vidéo du Trio Ciné-Muse et Max Linder',
  },
}

const img = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const IMAGES = {
  logo: img('logo.png'),
  logoWhite: img('logo-white.png'),
  slider1: img('slider1.jpg'),
  slider2: img('slider2.jpg'),
  parisQuiDort: img('paris-qui-dort-large.jpg'),
  parisQuiDortHeader: img('paris-qui-dort.jpg'),
  septAns: img('sept-ans.jpg'),
  septAnsHeader: img('sept-ans-header.png'),
  sabine: img('sabine.jpg'),
  isabelle: img('isabelle.jpg'),
  marie: img('marie.jpg'),
}

export const heroSlider = {
  image: IMAGES.slider1,
  announcement: {
    label: 'PROCHAINS CINÉ-CONCERT :',
    title: '« Paris qui dort »',
    date: 'Samedi 6 mars 2027 à 20h',
    venue: 'Forum Léopold-Sédar-Senghor',
    city: '93370 Montfermeil',
  },
}

export const teamMembers = [
  {
    name: 'Sabine Jehanno',
    role: 'FLÛTE',
    image: IMAGES.sabine,
    animation: 'fade-left',
    bio: `Aimant varier les genres autant que les formations, elle se produit en solo avec la troupe "Le chantier théâtre" (Festival de Gavarnie), et régulièrement dans des répertoires plus classiques de musique de chambre. La rencontre avec J.H. Carrasco lui donne l'occasion de pratiquer le répertoire traditionnel de tango argentin (Concert Piazzolla, Carrasco 2001-2002). Elle se produit régulièrement avec l'Orchestre de flûtes de Paris dont elle fait partie depuis 1998 (concert avec solistes comme Mme G. Amar, B. Fromanger…).
Professeur à la MMD du plessis Robinson depuis 1990, sa passion pour la pédagogie active l'incite à monter des projets, réunissant professionnels et élèves : "La flûte en chantier" C.H. Joubert 2004, "La flûte en folie" 2006.`,
  },
  {
    name: 'Isabelle Poulain',
    role: 'PIANO',
    image: IMAGES.isabelle,
    animation: 'fade-bottom',
    bio: `Artiste aux multiples facettes, Isabelle Poulain mène sa carrière musicale en côtoyant divers genres musicaux. Chambriste chevronnée, elle se produit en récital depuis 1985 avec soprano, ténor, baryton, violoncelle, flûte, clarinette. Elle a par ailleurs conçu et interprété plusieurs spectacles poly-artistiques mêlant musique, théâtre, conte et cinéma. Ces différentes prestations ont été accueillies avec enthousiasme tant en France (Salle Cortot, Cité des Arts, Cercle Suédois, Maison de l'Europe, Ambassade Américaine, Festival de Ville d'Avray, Festival du Parc Floral, Festival des églises romanes…), qu'à l'étranger (Angleterre, Italie, Slovaquie, Vénézuéla, Japon).
Isabelle Poulain a enregistré deux CD consacrés au compositeur italien F.P Tosti avec le ténor Marc Filograsso, ainsi qu'un CD de mélodies japonaises avec la soprano Kayo Fujino. Ceux-ci ont reçu des commentaires élogieux de la critique française et étrangère.`,
  },
  {
    name: 'Marie Tournemouly',
    role: 'VIOLONCELLE',
    image: IMAGES.marie,
    animation: 'fade-right',
    bio: `Marie débute ses études musicales à Bordeaux puis poursuit l'apprentissage du violoncelle au conservatoire de Montpellier et au CRR de Paris où elle obtient son DEM.
Elle se perfectionne ensuite au sein du département de formation à l'orchestre du conservatoire.
De septembre 2012 à juin 2015, elle étudie au Pôle d'Enseignement Supérieur de musique de Bourgogne.
Parallèlement à ses études musicales, Marie étudie le théâtre au sein de la formation professionnelle théâtrale de la compagnie Le vélo volé (75).
Depuis 2009, elle a travaillé avec différentes compagnies théâtrales (Théâtre de la lune, Compagnie du rabot, Le vélo volé…) en tant que violoncelliste, comédienne et directrice musicale, ce qui l'a amenée à se produire au Festival d'Avignon.
Actuellement, elle joue au sein du "Paris Festival Orchestra", accompagne "Claire A", artiste de chanson française.
Elle est l'une des fondatrices de l' "Ensemble Lysis", lauréat 2013 de la bourse Paris Jeunes Talents, ainsi que du Trio "Almarca".
Par ailleurs, Marie, titulaire du Diplôme d'Etat de professeur de violoncelle, a enseigné au Conservatoire Municipal d'Arrondissement de Paris (10°) et au Conservatoire Marietta Alboni (Paris 15°) jusqu'en juin 2016.`,
  },
]

export const parisQuiDortTestimonials = [
  {
    quote: `« Je vous confirme naturellement toute l'admiration que j'ai ressentie lors de la projection du film de René Clair de 1923, dans le laboratoire de mon aïeul Gustave Eiffel, film muet avec la Tour EIFFEL en vedette.
J'ai été ému par ce film, et par le merveilleux accompagnement de votre Trio Musical, flûte, Violoncelle, et piano. Je tenais à féliciter toute vos équipes »
Philippe Couperie Eiffel, Président des Amis d'Eiffel et de la Tour Eiffel`,
    name: 'LA SOUFFLEURIE EIFFEL',
    title: 'PARIS - 2019',
  },
  {
    quote: `«…. Le public slovène de la Cinémathèque a apprécié cette projection musicalement accompagnée et je tenais à vous remercier de votre prestation. …»
Dominique GESLIN Directeur de l'institut français C. Nodier, Ljubjana`,
    name: 'PRINTEMPS FRANCO-SLOVENE',
    title: 'LJUBLJANA - 2007',
  },
  {
    quote: `« Satie avait-il vu "Paris qui dort" de René Clair ? Weber ou Villa Lobos avait-il été impressionné par la projection de ce film ? On pourrait le croire tellement leur musique semble avoir été écrite et inspirée par le film.
A moins que ce soit le talent de ces jeunes et talentueuses musiciennes (que sont Sabine Jehanno à la flûte, Mireille Cholet au violoncelle et Isabelle Poulain au piano) qui ont su choisir et adapter ces musiques et nous les rendre si proches de l'esprit du film. Et vive le croisement des arts ! »
Suzanne Lipinska - Directrice du Moulin d'Andé.`,
    name: 'MUSIQUE AU MOULIN',
    title: '2007',
  },
  {
    quote: `« Non seulement la qualité de l'interprétation, mais le choix du programme – aussi bien en prélude au film que pendant la projection – ont été un ravissement. Votre talent et votre générosité ont séduit le public.»
A. Litardi Directeur de l'Institut français d'Istanbul`,
    name: 'ANKARA MUSIC FESTIVAL',
    title: 'ANKARA - 2008 ISTANBUL - IZMIR - 2008',
  },
  {
    quote: `« Un bijou ! La charmante bonbonnière de l'avenue Bourguiba a accueilli avec grâce le Ciné-concert de « Paris qui dort » film muet…un très beau cadeau pour les cinéphiles présents… »`,
    name: 'FESTIVAL DE LA MEDINA',
    title: 'Le Renouveau - Tunis - 2009',
  },
  {
    quote: `« … Le travail de collage musical que vous avez accompli pour accompagner en direct le merveilleux film de René Clair, "Paris qui dort", est tout à fait remarquable. Il met en valeur avec intelligence les qualités poétiques du film et les spectateurs présents ont été touchés et ravis …`,
    name: 'LA NUIT DU MUET',
    title: 'PARIS - 2006',
  },
  {
    quote: `« Belle Prouesse…les quelques cinéphiles présents ont pu assister à un spectacle musical et cinématographique de grande qualité… »`,
    name: 'Le Temps',
    title: '',
  },
  {
    quote: `« Paris qui dort » …. Seules cinq personnes déambulent dans la ville déserte. Cette vision lyrique et dadaïste de Paris est accompagnée par trois musiciennes, qui ont crée à partir d'œuvres diverses un collage musical étonnant. »`,
    name: 'MON PREMIER FESTIVAL',
    title: 'PARIS - 2007',
  },
  {
    quote: `« Le spectacle de Ciné-concert … à constitué une soirée inoubliable. Evénement musical aussi bien que cinématographique…L'auditoire andorran a été conquis aussi bien par « Paris qui dort » que par la sensibilité et la beauté de vos interprétations, superbement coordonnées avec le film. Merci pour ce grand moment de bonheur.»
Gilles CHOURAQUI - Ambassadeur de France en Andorre`,
    name: 'ANDORRE',
    title: '2009',
  },
  {
    quote: `« Un fantastique croisement des arts…Les cinéphiles et mélomanes ont trouvé leur compte, vendredi, au théätre municipal de Tunis, en assistant au ciné-concert…un croisement réussi entre musique et 7ème art mettant en valeur les images à la fois poétiques et comiques du film. »`,
    name: 'Le Quotidien',
    title: '',
  },
  {
    quote: `« C'est toujours un excellent moment passé en votre compagnie ! La qualité, la grâce, la finesse et la poésie de votre interprétation ont conqui le public Méruvien et je m'en réjoui. »`,
    name: 'Philippe Peyroutet',
    title: 'Responsable du service culturel de la ville de Méru',
  },
]

export const septAnsTestimonials = [
  {
    quote: `« Un moment magique … Les enfants étaient en plein bonheur grâce à ces « 7 ans de malheur » ! … »
Sébastien Binet, Directeur du cinéma "Les lumières"`,
    name: 'Nanterre',
    title: '2019',
  },
]
