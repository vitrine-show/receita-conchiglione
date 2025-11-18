
import React, { useState } from 'react';
import type { RecipeSectionData, ContentItem } from './types';
import { IngredientItem } from './components/IngredientItem';
import { ChevronDownIcon, IngredientsIcon, SauceIcon, FillingIcon, PastaIcon, ChefIcon } from './components/icons';

const recipeData: RecipeSectionData[] = [
  {
    id: 'ingredients',
    title: 'Ingredientes',
    icon: <IngredientsIcon className="w-6 h-6" />,
    content: [
      {
        type: 'paragraph',
        text: 'Ingrediente baseado para servir 10 pessoas. Obs: Cálculo médio de 6 unidades de conchiglione por pessoa.',
      },
      {
        type: 'ingredient_group',
        items: [
          { id: 'i2', text: '2 kg de peito de frango' },
          { id: 'i3', text: '2 latas de milho' },
          { id: 'i4', text: '1 azeitona grande' },
          { id: 'i5', text: '2 ou 3 cremes de leite' },
          { id: 'i6', text: '3 creamcheese (Philadelphia) pote de 300gr ou bisnaga de 700gr' },
          { id: 'i7', text: '2 massas de tomate' },
          { id: 'i8', text: '4 Sazon de carne' },
          { id: 'i9', text: '1 Pomarola (manjericão)' },
          { id: 'i10', text: '400gr de muçarela ralada' },
          { id: 'i11', text: '2 salsinhas' },
          { id: 'i12', text: '2 coentros' },
          { id: 'i13', text: '2 cebolas de cabeça' },
          { id: 'i14', text: '6 cabeças de alho' },
          { id: 'i15', text: '6 tomates Andrea ao ponto' },
        ],
      },
      {
        type: 'ingredient_group',
        title: 'Especiarias',
        items: [
          { id: 's1', text: 'Chimichurri defumada' },
          { id: 's2', text: 'Tempero baiano' },
        ],
      },
    ],
  },
  {
    id: 'sauce',
    title: '1º Passo: Molho Vermelho',
    icon: <SauceIcon className="w-6 h-6" />,
    content: [
      { type: 'paragraph', text: 'Em uma panela média dourar 4 cabeças de alho triturado com azeite ou óleo. Depois de dourar o alho, acrescentar 2 cebolas picadinhas e deixar dourar também. Em seguida colocar 6 tomates médios picados (tamanho a gosto).' },
      { type: 'paragraph', text: 'Dica: O tamanho deve ser equilibrado, nem tão grosseiro nem tão pequenininho.' },
      { type: 'paragraph', text: 'Tampar a panela deixando o tomate cozinhar.' },
      { type: 'paragraph', text: 'Quando ele estiver derretendo colocar 1 copo de água filtrada, 2 Pomarola de manjericão e 1 massa de tomate. Sazon ou outro tempero a gosto.' },
      { type: 'paragraph', text: 'Colocar no fogo baixo e deixar ferver até encorpar o caldo. Mexer de vez em quando para o tomate não grudar no fundo e acrescentar cheiro verde a gosto. Se precisar acrescentar mais um pouco de água filtrada.' },
      { type: 'paragraph', text: 'A cremosidade do molho é o ponto ideal: nem aguado nem grosso demais. Pronto! Deixar ele esfriar.' },
    ],
  },
  {
    id: 'filling',
    title: '2º Passo: Recheio',
    icon: <FillingIcon className="w-6 h-6" />,
    content: [
        { type: 'paragraph', text: 'Em uma panela grande dourar 2 cabeças de alho triturado com azeite ou óleo. Depois de dourar o alho acrescentar 1 cebola picadinha e deixar dourar também.' },
        { type: 'paragraph', text: 'Colocar 2kg de peito de frango cozido e desfiado, 2 ou 3 caixinhas de creme de leite, 2 latas de milho, 1 azeitona picada, Sazon a gosto e cheiro verde a gosto. Acrescentar 1 massa de tomate só para dar uma corzinha bonita, nada de ficar vermelhão.' },
        { type: 'paragraph', text: 'Deixar cozinhar por uns 15 min e pronto! Deixar esfriar.' },
    ],
  },
  {
    id: 'pasta',
    title: '3º Passo: A Massa',
    icon: <PastaIcon className="w-6 h-6" />,
    content: [
        { type: 'paragraph', text: 'Em uma panela grande colocar água filtrada para ferver. Somente depois de ferver colocar as peças de conchiglione em partes para não grudar uma na outra.' },
        { type: 'paragraph', text: 'Não mexer constantemente e também não deixar muito tempo paradas.' },
        { type: 'paragraph', text: 'O ponto da massa é crucial e essa massa tem o costume de "entrar uma na outra". Com muito cuidado ir tirando elas com o auxílio de um garfo.' },
        { type: 'tip', text: 'A massa não pode cozinhar muito e nem pode ficar mole. Também não pode ficar ao dente demais. Tem que ficar no ponto exato. Escolha uma pecinha para ir experimentando até achar o ponto perfeito.' },
        { type: 'paragraph', text: 'Quando a massa estiver pronta escorrer toda a água, passar na água fria para parar o cozimento e selar com um fio de azeite para não grudar.' },
        { type: 'paragraph', text: 'Enquanto prepara a próxima remessa já pode ir montando essa.' },
    ],
  },
  {
    id: 'assembly',
    title: '4º Passo: Montagem e Finalização',
    icon: <ChefIcon className="w-6 h-6" />,
    content: [
        { type: 'paragraph', text: 'Pegar travessas de vidro. Cobrir o fundo com molho vermelho. Não colocar muito, apenas cobrir o fundo mesmo, uma fina camada.' },
        { type: 'paragraph', text: 'Abrir cuidadosamente um conchiglione e calçar com creamcheese (melhor marca é a Philadelphia). Depois colocar o recheio de frango de forma que fique completo, sem ficar muito cheio e nem vazio. Colocar na travessa deixando uma pequena distância entre elas e ir repetindo isso.' },
        { type: 'paragraph', text: 'Após a montagem cobrir parcialmente uma a uma com mussarela ralada (umas 400gr já dá). Acrescentar um fio generoso de molho vermelho por cima de cada uma.' },
        { type: 'paragraph', text: 'Finalizar com orégano e levar ao forno.' },
        { type: 'paragraph', text: 'Lembrar: o forno deve estar preaquecido. Temperatura 180º. Aguardar gratinar e pronto!' },
    ],
  },
];

// FIX: Explicitly type RenderContent as a React.FC to ensure TypeScript recognizes it as a component that can receive a 'key' prop.
const RenderContent: React.FC<{ item: ContentItem; }> = ({ item }) => {
  switch (item.type) {
    case 'paragraph':
      return (
        <p className="mb-4 text-gray-300 leading-relaxed">
          {item.text.split(/(?<=\.)\s*/)
            .filter(s => s.trim())
            .map((sentence, index, arr) => (
              <React.Fragment key={index}>
                {sentence.trim()}
                {index < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
        </p>
      );
    case 'tip':
      return (
        <div className="my-6 bg-yellow-900/60 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="font-semibold text-yellow-300">Dica:</p>
          <p className="text-yellow-400 italic mt-1">
            {item.text.split(/(?<=\.)\s*/)
              .filter(s => s.trim())
              .map((sentence, index, arr) => (
                <React.Fragment key={index}>
                  {sentence.trim()}
                  {index < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
        </div>
      );
    case 'ingredient_group':
      return (
        <div className="my-4">
          {item.title && <h4 className="font-semibold text-gray-100 mb-2">{item.title}</h4>}
          <ul className="list-none p-0">
            {item.items.map((ingredient) => (
              <IngredientItem key={ingredient.id} text={ingredient.text} />
            ))}
          </ul>
        </div>
      );
    default:
        return null;
  }
};


const AccordionItem: React.FC<{
  section: RecipeSectionData;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ section, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/10 transition-colors duration-300 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold text-gray-100 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-lg"
        aria-expanded={isOpen}
        aria-controls={`content-${section.id}`}
      >
        <div className="flex items-center gap-4">
          <span className="text-red-500">{section.icon}</span>
          <span>{section.title}</span>
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={`content-${section.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2">
          {section.content.map((item, index) => (
            <RenderContent key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(recipeData[0]?.id || null);

  const handleToggleSection = (sectionId: string) => {
    setOpenSectionId(prevId => (prevId === sectionId ? null : sectionId));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="max-w-4xl w-full bg-black/50 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg container-glow overflow-hidden">
        <header className="p-8 text-center border-b border-white/10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight logo-glow">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              Conchiglione Gourmet
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Receita exclusiva por{' '}
            <span className="font-semibold bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              Adriele Almeida
            </span>
            , Mestre em Massas e Molhos.
          </p>
        </header>

        <div className="divide-y divide-white/10">
          {recipeData.map((section) => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openSectionId === section.id}
              onToggle={() => handleToggleSection(section.id)}
            />
          ))}
        </div>

        <footer className="p-8 text-center bg-black/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500 tracking-wider">
                PROTINHO!
            </h2>
            <p className="mt-2 text-lg text-gray-300">VAI SURPREENDER A TODOS!</p>
            <p className="mt-6 text-xl text-gray-400">
                Com amor, <span className="text-red-500 text-2xl animate-pulse">♥</span> Adriele!
            </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
