// ─────────────────────────────────────────────
// 📚 Laws Data (First 10 Laws)
// ─────────────────────────────────────────────
const lawsData = [
  {
    number: 1,
    title: "Never Outshine the Master",
    preview: "Always make those above you feel comfortably superior...",
    explanation: "Always make those above you feel comfortably superior. In your desire to impress, do not go too far in displaying your talents...",
    example: "Nicolas Fouquet threw a lavish party that eclipsed King Louis XIV. He was arrested. Outshining the master cost him everything.",
    metaphor: "Like the moon reflects the sun's light, your brilliance should highlight your master—not compete with it."
  },
  {
    number: 2,
    title: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    preview: "Be wary of friends—they will betray you more quickly...",
    explanation: "Friends can become jealous or entitled. Enemies have something to prove. Trust strategically.",
    example: "Michael Corleone was betrayed by his brother Fredo. Meanwhile, old enemies became loyal allies.",
    metaphor: "Old shoes are comfortable until they fall apart. New armor is stiff but protective."
  },
  {
    number: 3,
    title: "Conceal Your Intentions",
    preview: "Keep people off-balance and in the dark...",
    explanation: "Disguise your purpose. Misdirection is your weapon.",
    example: "Bismarck unified Germany while pretending to act defensively.",
    metaphor: "Like a chess master, you only reveal your strategy at checkmate."
  },
  {
    number: 4,
    title: "Always Say Less Than Necessary",
    preview: "When trying to impress, the more you say...",
    explanation: "Powerful people are cryptic. Their silence creates authority.",
    example: "Louis XIV spoke little; people feared and revered him.",
    metaphor: "Diamonds are valuable because they're rare. So are your words."
  },
  {
    number: 5,
    title: "Guard Your Reputation With Your Life",
    preview: "Reputation is the cornerstone of power...",
    explanation: "Reputation precedes you. Lose it, and you're vulnerable.",
    example: "P.T. Barnum mastered perception. Even scandals built his myth.",
    metaphor: "Your rep is a fortress—slow to build, easy to destroy."
  },
  {
    number: 6,
    title: "Court Attention at All Costs",
    preview: "Everything is judged by its appearance...",
    explanation: "If no one sees you, you don't exist. Be memorable.",
    example: "Salvador Dalí made himself unforgettable with style and spectacle.",
    metaphor: "In a theater, those under the spotlight live forever."
  },
  {
    number: 7,
    title: "Get Others to Do the Work, but Always Take the Credit",
    preview: "Use the efforts of others to advance your own cause...",
    explanation: "Delegate and direct. Be the face, not the hands.",
    example: "Edison managed inventors but became history’s genius.",
    metaphor: "The conductor gets applause—the orchestra gets forgotten."
  },
  {
    number: 8,
    title: "Make People Come to You — Use Bait if Necessary",
    preview: "Control the terms. Lure others in...",
    explanation: "Pull others into your game. Don’t chase—entrap.",
    example: "Napoleon lured enemies onto chosen battlefields.",
    metaphor: "Spiders wait. Flies come."
  },
  {
    number: 9,
    title: "Win Through Actions, Never Argument",
    preview: "Arguments breed resentment...",
    explanation: "Change minds with actions, not words.",
    example: "Gandhi’s silence and marches changed an empire.",
    metaphor: "Storms rage and pass. Rivers shape the land."
  },
  {
    number: 11,
    title: "Learn to Keep People Dependent on You",
    preview: "The more you are relied on, the more secure you are...",
    explanation: "Make your presence indispensable. Create a need for your skills and services that others cannot easily fulfill.",
    example: "Otto von Bismarck made himself essential to the Prussian King, navigating complex political landscapes.",
    metaphor: "Be the central pillar, not a removable brick."
  },
  {
    number: 12,
    title: "Use Selective Honesty and Generosity to Disarm Your Victim",
    preview: "One sincere and honest move will cover over dozens of dishonest ones...",
    explanation: "A calculated act of honesty or generosity can lower guards and distract from deceptive intentions.",
    example: "A con artist might return a dropped wallet to gain trust before a larger scam.",
    metaphor: "A single sweet berry disguises a poisoned vine."
  },
  {
    number: 13,
    title: "When Asking for Help, Appeal to People's Self-Interest, Never to Their Mercy or Gratitude",
    preview: "Do not confuse what people say with what they feel...",
    explanation: "People are motivated by their own gain. Frame your requests in terms of what benefits them.",
    example: "Negotiating a deal by highlighting how it profits the other party, rather than pleading for sympathy.",
    metaphor: "Offer a delicious meal, not just an empty bowl."
  },
  {
    number: 14,
    title: "Pose as a Friend, Work as a Spy",
    preview: "It is critical to know your rival...",
    explanation: "Gather information covertly. Cultivate an air of friendliness to extract secrets and insights.",
    example: "Sun-Tzu emphasized knowing your enemy's strengths and weaknesses for strategic advantage.",
    metaphor: "The owl observes silently from the friendly branches."
  },
  {
    number: 15,
    title: "Crush Your Enemy Totally",
    preview: "Much is to be gained from stopping halfway, but all is to be lost...",
    explanation: "Do not leave defeated enemies with the means or will to retaliate. Eliminate them completely, or assimilate them.",
    example: "The Roman Empire's policy of completely conquering and integrating defeated territories.",
    metaphor: "Uproot the weed entirely, or it will grow back stronger."
  },
  {
    number: 16,
    title: "Use Absence to Increase Respect and Honor",
    preview: "Too much circulation makes the price go down...",
    explanation: "Rarefying your presence can make you more esteemed and desired. Familiarity can breed contempt.",
    example: "A musician taking a hiatus between albums to build anticipation and demand.",
    metaphor: "The diamond gains value from its rarity, not its abundance."
  },
  {
    number: 17,
    title: "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    preview: "Humans are creatures of habit with an insatiable need to see familiarity in others' actions...",
    explanation: "Maintain an element of surprise. Keep others off-balance by acting in ways they don't expect.",
    example: "Pablo Picasso constantly reinventing his artistic style, challenging critics and audiences.",
    metaphor: "Be the shifting wind, not the predictable current."
  },
  {
    number: 18,
    title: "Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous",
    preview: "The world is dangerous and enemies are everywhere...",
    explanation: "While protection is necessary, excessive isolation cuts you off from vital information and allies.",
    example: "The hermetic life of Howard Hughes, which led to paranoia and decline.",
    metaphor: "A fortress can become a tomb if it's too far from the world."
  },
  {
    number: 19,
    title: "Know Who You're Dealing With — Do Not Offend the Wrong Person",
    preview: "There are many different kinds of people in the world, and you can never assume that everyone will react to your strategies in the same way...",
    explanation: "Understand the character and influence of those around you. Some individuals are best left undisturbed.",
    example: "Napoleon making alliances based on careful assessment of his counterparts' power and temperament.",
    metaphor: "Avoid disturbing a sleeping dragon."
  },
  {
    number: 20,
    title: "Do Not Commit to Anyone",
    preview: "It is the fool who always rushes to take sides...",
    explanation: "Maintain your independence. Avoid entanglement in others' quarrels, preserving your flexibility and options.",
    example: "A skilled diplomat avoiding definitive alliances to remain a valuable mediator.",
    metaphor: "Be the river that flows freely, not a fixed bridge."
  },
  {
    number: 21,
    title: "Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
    preview: "No one likes feeling stupider than the next person...",
    explanation: "Appear less intelligent or capable than you are to lull others into a false sense of superiority, making them vulnerable.",
    example: "A poker player feigning weakness to trick opponents into overplaying their hand.",
    metaphor: "The fox pretends to limp to draw in the hunter."
  },
  {
    number: 22,
    title: "Use the Surrender Tactic: Transform Weakness into Power",
    preview: "When you are weaker, never fight for honor's sake...",
    explanation: "When faced with overwhelming force, feign surrender to gain time, disarm your opponent, and wait for an opportunity to strike.",
    example: "Ancient generals retreating strategically to draw the enemy into an ambush.",
    metaphor: "The willow bends with the storm, then springs back."
  },
  {
    number: 23,
    title: "Concentrate Your Forces",
    preview: "Conserve your energies and forces by keeping them concentrated at their strongest point...",
    explanation: "Focus your efforts and resources on a single, powerful objective. Diffusion weakens your impact.",
    example: "Alexander the Great's focused military campaigns, overwhelming opponents with concentrated force.",
    metaphor: "A laser beam pierces, while scattered light merely illuminates."
  },
  {
    number: 24,
    title: "Play the Perfect Courtier",
    preview: "The perfect courtier thrives in a world where everything revolves around power and political dexterity...",
    explanation: "Master the art of indirect influence. Be gracious, charming, and indispensable without appearing overtly ambitious.",
    example: "Count Metternich's subtle manipulation of European politics through charm and strategic alliances.",
    metaphor: "The finely tuned instrument that creates perfect harmony in the orchestra."
  },
  {
    number: 25,
    title: "Re-Create Yourself",
    preview: "Do not accept the roles that society foists on you...",
    explanation: "Shape your own identity and image. Do not be defined by others' perceptions; continually evolve and present a compelling persona.",
    example: "Madonna's constant reinvention of her image and musical style throughout her career.",
    metaphor: "The phoenix rising from its own ashes, always new."
  },
  {
    number: 26,
    title: "Keep Your Hands Clean",
    preview: "You must seem a paragon of civility and efficiency...",
    explanation: "Avoid direct involvement in unpleasant tasks or conflicts. Use others to do your dirty work, maintaining your reputation.",
    example: "A powerful leader delegating unpopular decisions to subordinates to avoid public backlash.",
    metaphor: "The puppet master pulls the strings unseen."
  },
  {
    number: 27,
    title: "Play on People's Need to Believe to Create a Cultlike Following",
    preview: "People have an overwhelming desire to believe in something...",
    explanation: "Offer a cause, a dream, or a new faith that people can rally behind, giving them purpose and direction.",
    example: "Steve Jobs creating a devoted following for Apple products through a vision of innovation and design.",
    metaphor: "Be the charismatic conductor of an eager orchestra."
  },
  {
    number: 28,
    title: "Enter Action with Boldness",
    preview: "If you are unsure of a course of action, do not attempt it...",
    explanation: "Hesitation broadcasts weakness. Act with confidence and decisiveness, even if you are unsure; boldness itself can inspire success.",
    example: "Julius Caesar crossing the Rubicon, a decisive act that solidified his power.",
    metaphor: "The lion's roar, not the mouse's squeak."
  },
  {
    number: 29,
    title: "Plan All the Way to the End",
    preview: "The ending is everything...",
    explanation: "Visualize the entire course of your plan, anticipating obstacles and outcomes. Do not leave anything to chance.",
    example: "A chess grandmaster thinking many moves ahead to secure victory.",
    metaphor: "The master architect blueprints the entire skyscraper, not just the foundation."
  },
  {
    number: 30,
    title: "Make Your Accomplishments Seem Effortless",
    preview: "Your actions must seem natural and executed with ease...",
    explanation: "Conceal the hard work and struggle behind your achievements. Make your successes appear as effortless genius.",
    example: "A virtuoso musician performing a complex piece with apparent ease, hiding years of practice.",
    metaphor: "The swan glides gracefully, concealing its furiously paddling feet."
  },
  {
    number: 31,
    title: "Control the Options: Get Others to Play with the Cards You Deal",
    preview: "The best deceptions are the ones that seem to give the other person a choice...",
    explanation: "Manipulate situations so that others believe they are making independent choices, when in fact they are choosing from your pre-determined options.",
    example: "A salesman offering two choices, both leading to a desired outcome for him.",
    metaphor: "The clever shepherd guides the flock where he wants, by subtly fencing off other paths."
  },
  {
    number: 32,
    title: "Play to People's Fantasies",
    preview: "The truth is often avoided because it is ugly and unpleasant...",
    explanation: "Appeal to people's desires, dreams, and illusions rather than harsh realities. Offer them an escape or a brighter future.",
    example: "Hollywood selling dreams and escapism through its movies.",
    metaphor: "Offer a glimpse of the starry heavens, not the dusty ground."
  },
  {
    number: 33,
    title: "Discover Each Man's Thumbscrew",
    preview: "Everyone has a weakness, a gap in the castle wall...",
    explanation: "Identify the vulnerabilities, insecurities, or hidden desires of others. Exploit these to influence or control them.",
    example: "A negotiator identifying the opposing party's desperate need for a deal to gain leverage.",
    metaphor: "Find the loose thread that unravels the whole garment."
  },
  {
    number: 34,
    title: "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    preview: "The way you carry yourself will often determine how you are treated...",
    explanation: "Present yourself with dignity, confidence, and an aura of self-worth. Demand respect through your demeanor and actions.",
    example: "Queen Elizabeth I's regal presence commanded deference from her subjects and foreign powers.",
    metaphor: "The peacock flaunts its feathers, and all eyes are drawn to it."
  },
  {
    number: 35,
    title: "Master the Art of Timing",
    preview: "Never seem to be in a hurry...",
    explanation: "Know when to act and when to wait. Timing is crucial for success; rushing can lead to mistakes, while waiting too long can mean lost opportunities.",
    example: "A stock market investor knowing precisely when to buy and sell for maximum profit.",
    metaphor: "The skilled hunter waits patiently for the perfect moment to strike."
  },
  {
    number: 36,
    title: "Disdain Things You Cannot Have: Ignoring Them is the Best Revenge",
    preview: "Acknowledging a problem often gives it an existence and credibility...",
    explanation: "If something is beyond your reach, show indifference or contempt for it. This preserves your dignity and frustrates your adversaries.",
    example: "A spurned lover publicly ignoring their former partner, robbing them of the satisfaction of a reaction.",
    metaphor: "The untouched fruit withers from neglect, not from being picked."
  },
  {
    number: 37,
    title: "Create Compelling Spectacles",
    preview: "Striking imagery and grand symbolic gestures create the aura of power...",
    explanation: "Use dramatic displays and symbolic actions to impress, distract, and control. Grandeur can mask reality.",
    example: "Political rallies with impressive staging and fervent speeches to sway public opinion.",
    metaphor: "The grand fireworks display diverts attention from the magician's subtle trick."
  },
  {
    number: 38,
    title: "Think as You Like But Behave Like Others",
    preview: "If you make a show of going against the times, you are displaying your contempt for common decency...",
    explanation: "Maintain outward conformity to social norms, even if your inner thoughts and plans are unconventional. Blend in to avoid scrutiny.",
    example: "A revolutionary outwardly participating in traditional society while secretly plotting rebellion.",
    metaphor: "The chameleon blends with its surroundings, its true nature hidden."
  },
  {
    number: 39,
    title: "Stir Up Waters to Catch Fish",
    preview: "Anger and emotion are strategically counterproductive...",
    explanation: "Provoke and disturb others to expose their weaknesses, make them react impulsively, or create opportunities for yourself amidst chaos.",
    example: "A lawyer deliberately irritating an opposing witness to make them lose composure and reveal inconsistencies.",
    metaphor: "Turbulence reveals what lies beneath the calm surface."
  },
  {
    number: 40,
    title: "Despise the Free Lunch",
    preview: "What is offered for free is dangerous...",
    explanation: "Be wary of anything offered without a clear cost or obligation. There are always hidden strings and debts.",
    example: "A shrewd businessman declining seemingly generous offers, anticipating future demands.",
    metaphor: "The baited hook always comes with a line attached."
  },
  {
    number: 41,
    title: "Avoid Stepping into a Great Man's Shoes",
    preview: "What comes first always appears better and more original than what comes after...",
    explanation: "Do not attempt to directly follow or imitate a highly successful predecessor. Carve your own path to avoid unfavorable comparisons.",
    example: "A new leader trying to differentiate themselves rather than being seen as merely copying their predecessor.",
    metaphor: "The second sun never shines as brightly as the first."
  },
  {
    number: 42,
    title: "Strike the Shepherd and the Sheep will Scatter",
    preview: "Trouble can often be traced to a single strong individual...",
    explanation: "Identify the source of a problem or the leader of an opposition. Neutralize that key individual, and their followers will disperse.",
    example: "Targeting the leader of a protest movement to break its momentum.",
    metaphor: "Fell the tallest tree, and the forest canopy opens."
  },
  {
    number: 43,
    title: "Work on the Hearts and Minds of Others",
    preview: "Coercion creates a reaction that will eventually work against you...",
    explanation: "Win people over through seduction, persuasion, and understanding their psychology. Inspire loyalty rather than demanding obedience.",
    example: "A charismatic leader inspiring followers through shared vision and emotional connection.",
    metaphor: "The gentle rain nourishes the crops more effectively than a harsh flood."
  },
  {
    number: 44,
    title: "Disarm and Infuriate with the Mirror Effect",
    preview: "The mirror reflects reality, but it is also the perfect tool for deception...",
    explanation: "Mimic your opponents' actions, values, or arguments to confuse, mock, or make them feel understood, while subtly gaining control.",
    example: "Negotiators mirroring body language to build rapport and subtly influence decisions.",
    metaphor: "The reflection looks like you, but the control is mine."
  },
  {
    number: 45,
    title: "Preach the Need for Change, But Never Reform Too Much at Once",
    preview: "Human beings are creatures of habit...",
    explanation: "Advocate for necessary change, but introduce it gradually and strategically. Radical upheaval can cause backlash and instability.",
    example: "A CEO implementing new policies in phases to allow employees to adapt gradually.",
    metaphor: "Trim the branches carefully, do not chop down the entire tree."
  },
  {
    number: 46,
    title: "Never Appear Too Perfect",
    preview: "Appearing better than others is always dangerous...",
    explanation: "Displaying flawless perfection can breed envy and resentment. Occasionally reveal minor flaws or vulnerabilities to seem more human and less threatening.",
    example: "A successful entrepreneur admitting to early struggles or mistakes to appear relatable.",
    metaphor: "The flawless statue is admired, but the slightly chipped one is loved."
  },
  {
    number: 47,
    title: "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    preview: "The moment of victory is often the moment of greatest peril...",
    explanation: "Achieve your objective and then cease. Overreaching or pressing your advantage too far can turn triumph into defeat.",
    example: "A military commander knowing when to consolidate gains and not pursue a fleeing enemy into a trap.",
    metaphor: "The arrow hits the bullseye; pulling it further only damages the target."
  },
  {
    number: 48,
    title: "Assume Formlessness",
    preview: "By taking a shape, by having a visible plan, you open yourself to attack...",
    explanation: "Remain adaptable and fluid. Avoid rigid forms or predictable patterns, making it impossible for enemies to grasp or counter you.",
    example: "A martial artist flowing seamlessly between defensive and offensive postures, never fixed.",
    metaphor: "Be like water, which adapts to any container and can neither be grasped nor broken."
  }
];

// ─────────────────────────────────────────────
// 💬 Wisdom Carousel Quotes
// ─────────────────────────────────────────────
const wisdomQuotes = [
  {
    quote: "Never assume the person you're dealing with is weaker or less important than you are.",
    source: "Law 1"
  },
  {
    quote: "Friends are the ones who betray you; enemies have something to prove.",
    source: "Law 2"
  },
  {
    quote: "Master the art of misdirection. What they don’t know, they can’t stop.",
    source: "Law 3"
  },
  {
    quote: "Speak less. It makes your silence valuable.",
    source: "Law 4"
  },
  {
    quote: "You are your reputation. Guard it like a crown.",
    source: "Law 5"
  },
    {
    quote: "To keep your independence, always be needed and wanted.",
    source: "Law 11"
  },
  {
    quote: "Use selective honesty to disarm your victim.",
    source: "Law 12"
  },
  {
    quote: "When asking for help, appeal to self-interest.",
    source: "Law 13"
  },
  {
    quote: "Pose as a friend, work as a spy.",
    source: "Law 14"
  },
  {
    quote: "Crush your enemy totally—don’t leave wounds, leave silence.",
    source: "Law 15"
  },
  {
    quote: "Use absence to increase respect and honor.",
    source: "Law 16"
  },
  {
    quote: "Keep others in suspended terror: Cultivate unpredictability.",
    source: "Law 17"
  },
  {
    quote: "Isolation is dangerous — stay in the center of things.",
    source: "Law 18"
  },
  {
    quote: "Know who you’re dealing with — not everyone is worth baiting.",
    source: "Law 19"
  },
  {
    quote: "Do not commit to anyone — stay above the fray.",
    source: "Law 20"
  },
  {
    quote: "Play a sucker to catch a sucker — act dumber than your mark.",
    source: "Law 21"
  },
  {
    quote: "Surrender can be strategy — transform weakness into power.",
    source: "Law 22"
  },
  {
    quote: "Concentrate your forces. Energy scattered is energy wasted.",
    source: "Law 23"
  },
  {
    quote: "Play the perfect courtier — master artful diplomacy.",
    source: "Law 24"
  },
  {
    quote: "Re-create yourself. Don’t accept the roles society offers.",
    source: "Law 25"
  },
  {
    quote: "Keep your hands clean — use others as scapegoats.",
    source: "Law 26"
  },
  {
    quote: "Create compelling spectacles — appearance is power.",
    source: "Law 27"
  },
  {
    quote: "Enter action with boldness. Hesitation is lethal.",
    source: "Law 28"
  },
  {
    quote: "Plan all the way to the end — foresight is power.",
    source: "Law 29"
  },
  {
    quote: "Make your accomplishments seem effortless.",
    source: "Law 30"
  },
  {
    quote: "Control the options — make others play with the cards you deal.",
    source: "Law 31"
  },
  {
    quote: "Play to people’s fantasies — truth is often avoided.",
    source: "Law 32"
  },
  {
    quote: "Discover each man's thumbscrew — everyone has a weakness.",
    source: "Law 33"
  },
  {
    quote: "Be royal in your own fashion — act like a king to be treated like one.",
    source: "Law 34"
  },
  {
    quote: "Master the art of timing — power often waits.",
    source: "Law 35"
  },
  {
    quote: "Disdain what you cannot have — ignoring is revenge.",
    source: "Law 36"
  },
  {
    quote: "Create a cult-like following by becoming the source of meaning.",
    source: "Law 37"
  },
  {
    quote: "Think as you like but behave like others.",
    source: "Law 38"
  },
  {
    quote: "Stir up waters to catch fish — chaos benefits the strategist.",
    source: "Law 39"
  },
  {
    quote: "Despise the free lunch — what costs nothing is worth nothing.",
    source: "Law 40"
  },
  {
    quote: "Avoid stepping into a great man’s shoes — blaze your own path.",
    source: "Law 41"
  },
  {
    quote: "Strike the shepherd and the sheep will scatter.",
    source: "Law 42"
  },
  {
    quote: "Work on the hearts and minds of others.",
    source: "Law 43"
  },
  {
    quote: "Disarm and infuriate with the mirror effect.",
    source: "Law 44"
  },
  {
    quote: "Preach the need for change, but never reform too much at once.",
    source: "Law 45"
  },
  {
    quote: "Never appear too perfect — envy breeds enemies.",
    source: "Law 46"
  },
  {
    quote: "Do not go past the mark you aimed for — know when to stop.",
    source: "Law 47"
  },
  {
    quote: "Assume formlessness — adapt like water to survive.",
    source: "Law 48"
  }

];

// ─────────────────────────────────────────────
// 🚀 DOM Loaded – Initialize Everything
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderLaws();
  setupEventListeners();
  initializeTheme();
  initializeCarousel();
  addScrollAnimations();
  createGoldenParticles();
});

// ─────────────────────────────────────────────
// 🎨 Theme Toggle
// ─────────────────────────────────────────────
function initializeTheme() {
  const theme = localStorage.getItem('theme') || 'dark';
  if (theme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    document.querySelector('.toggle-text').textContent = 'Dark Mode';
  }
}

function toggleTheme() {
  const isLight = document.body.getAttribute('data-theme') === 'light';
  document.body.setAttribute('data-theme', isLight ? 'dark' : 'light');
  document.querySelector('.toggle-text').textContent = isLight ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
}

// ─────────────────────────────────────────────
// 📦 Render Law Boxes
// ─────────────────────────────────────────────
function renderLaws() {
  const grid = document.getElementById('lawsGrid');
  lawsData.forEach(law => {
    const box = document.createElement('div');
    box.className = 'law-box';
    box.setAttribute('data-law', law.number);
    box.innerHTML = `
      <div class="law-number">Law ${law.number}</div>
      <h3 class="law-title">${law.title}</h3>
      <p class="law-preview">${law.preview}</p>
      <button class="read-more-btn">Read More</button>
      <div class="law-expanded" id="expanded-${law.number}">
        <button class="close-btn" aria-label="Close Law">×</button>
        <div class="law-explanation">
          <h4>The Law Explained</h4>
          <p>${law.explanation}</p>
        </div>
        <div class="law-example">
          <h4>Historical Example</h4>
          <p>${law.example}</p>
        </div>
        <div class="law-metaphor">
          <h4>The Metaphor</h4>
          <p>${law.metaphor}</p>
        </div>
      </div>
    `;
    grid.appendChild(box);
  });
}
// ─────────────────────────────────────────────
// ⚙️ Render Power Grid Buttons (Laws 1–48)
// ─────────────────────────────────────────────
const powerGrid = document.getElementById('powerGrid');
for (let i = 1; i <= 48; i++) {
  const btn = document.createElement('button');
  btn.className = 'power-btn';
  btn.textContent = `Law ${i}`;
  btn.dataset.law = i;

  btn.addEventListener('click', () => {
    const lawElement = document.querySelector(`[data-law="${i}"]`);
    if (lawElement) {
      lawElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const expandBtn = lawElement.querySelector('.read-more-btn');
      if (expandBtn) expandBtn.click();
    }
  });

  powerGrid.appendChild(btn);
}


// ─────────────────────────────────────────────
// ⚙️ Event Listeners
// ─────────────────────────────────────────────
function setupEventListeners() {
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Delegated click for expand/collapse
  document.getElementById('lawsGrid').addEventListener('click', e => {
    const box = e.target.closest('.law-box');
    if (!box) return;
    const number = box.dataset.law;

    if (e.target.classList.contains('read-more-btn')) {
      document.querySelectorAll('.law-expanded.active').forEach(el => el.classList.remove('active'));
      document.getElementById(`expanded-${number}`).classList.add('active');
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (e.target.classList.contains('close-btn')) {
      document.getElementById(`expanded-${number}`).classList.remove('active');
    }
  });

  // Mind map navigation
  document.querySelectorAll('.law-node').forEach(node => {
    node.addEventListener('click', () => {
      const law = document.querySelector(`[data-law="${node.dataset.law}"]`);
      if (law) {
        law.scrollIntoView({ behavior: 'smooth', block: 'center' });
        law.querySelector('.read-more-btn').click();
      }
    });
  });

  // Scroll to laws
  document.getElementById('scrollToLaws')?.addEventListener('click', () => {
    document.getElementById('laws').scrollIntoView({ behavior: 'smooth' });
  });

  // Carousel controls
  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Escape') {
      document.querySelectorAll('.law-expanded.active').forEach(e => e.classList.remove('active'));
    }
  });

  // Touch/Swipe
  const carousel = document.getElementById('wisdomCarousel');
  let startX = 0;
  carousel.addEventListener('touchstart', e => (startX = e.touches[0].clientX));
  carousel.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) prevSlide();
    if (startX - endX > 50) nextSlide();
  });
}

// ─────────────────────────────────────────────
// 🎠 Carousel Functions
// ─────────────────────────────────────────────
let currentIndex = 0;
function initializeCarousel() {
  const track = document.getElementById('carouselTrack');
  wisdomQuotes.forEach(q => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `
      <div class="carousel-quote">"${q.quote}"</div>
      <div class="carousel-source">— ${q.source}</div>
    `;
    track.appendChild(item);
  });
  updateCarousel();
  setInterval(nextSlide, 5000);
}
function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % wisdomQuotes.length;
  updateCarousel();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + wisdomQuotes.length) % wisdomQuotes.length;
  updateCarousel();
}

// ─────────────────────────────────────────────
// 🎇 Scroll Animations
// ─────────────────────────────────────────────
function addScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.law-box, .timeline-item, .fact-box').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ─────────────────────────────────────────────
// ✨ Golden Particle Effect
// ─────────────────────────────────────────────
function createGoldenParticles() {
  const hero = document.querySelector('.hero');
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    dot.className = 'golden-particle';
    dot.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--accent-gold);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat ${3 + Math.random() * 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    hero.appendChild(dot);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0%, 100% { opacity: 0; transform: translateY(0px) scale(0); }
      50% { opacity: 0.6; transform: translateY(-50px) scale(1); }
    }
  `;
  document.head.appendChild(style);
}

// ─────────────────────────────────────────────
// 🌀 Parallax Background
// ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const bg = document.querySelector('.hero-background');
  if (bg) bg.style.transform = `translateY(${scrolled * -0.5}px)`;
});
