using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TarotAppV2.Models;
namespace TarotAppV2.Controllers
{
    [Route("api")]
    [ApiController]
    public class TarotAPIController : ControllerBase
    {
        private static readonly IEnumerable<TarotModel> Items = new[]
        {

        new TarotModel{Id =0, Name = "The Fool",  Description="The Fool represents the start of a new journey or adventure, often involving a leap of faith, innocence, and spontaneity. It signifies taking risks with an open heart and a sense of wonder about what lies ahead.", ImageId=0 },
        new TarotModel{Id =1, Name = "The Magician",  Description="The Magician is the card of manifestation and personal power. It symbolizes the ability to harness one's talents and resources to create and transform one's reality.", ImageId=1 },
        new TarotModel{Id =2, Name = "The High Priestess",  Description="The High Priestess embodies intuition, the subconscious, and inner wisdom. It suggests a need to trust your instincts and delve deeper into the mysteries of life.", ImageId=2 },
        new TarotModel{Id =3, Name = "The Empress",  Description="The Empress represents nurturing, abundance, and fertility. It signifies a time of growth, creativity, and the nurturing of both oneself and others.", ImageId=3 },
        new TarotModel{Id =4, Name = "The Emperor",  Description="The Emperor symbolizes authority, structure, and leadership. It signifies a need for order and control in one's life, as well as taking on responsibilities with confidence.", ImageId=4 },
        new TarotModel{Id =5, Name = "The Hierophant",  Description="The Hierophant represents tradition, spirituality, and belief systems. It suggests seeking guidance from established institutions or spiritual leaders to find answers to life's questions.", ImageId=5 },
        new TarotModel{Id =6, Name = "The Lovers",  Description="The Lovers card signifies love, relationships, and choices. It represents a significant decision to be made, often involving matters of the heart or moral dilemmas.", ImageId=6 },
        new TarotModel{Id =7, Name = "The Chariot",  Description="The Chariot represents determination, control, and victory. It signifies moving forward with confidence and overcoming obstacles through willpower and discipline.", ImageId=7 },
        new TarotModel{Id =8, Name = "Strength",  Description="Strength is a card of inner strength, courage, and compassion. It suggests the ability to overcome challenges with grace and gentleness rather than force.", ImageId=8 },
        new TarotModel{Id =9, Name = "The Hermit",  Description="The Hermit represents solitude, introspection, and guidance. It suggests a period of self-discovery and seeking answers within, often through meditation or introspective practices.", ImageId=9 },
        new TarotModel{Id =10, Name = "The Wheel Of Fortune",  Description=" The Wheel of Fortune symbolizes cycles, destiny, and change. It represents the ever-changing nature of life and the need to adapt to both ups and downs.", ImageId=10 },
        new TarotModel{Id =11, Name = "Justice",  Description="Justice is the card of fairness, truth, and balance. It signifies the need for objective judgment and ethical decision-making.", ImageId=11 },
        new TarotModel{Id =12, Name = "The Hanged Man",  Description="The Hanged Man embodies surrender, sacrifice, and gaining a new perspective. It suggests letting go of attachments and seeing situations from a different angle.", ImageId=12 },
        new TarotModel{Id =13, Name = "Death",  Description="Death: Death signifies transformation, change, and renewal. It represents the natural cycle of endings and new beginnings, often associated with personal growth.", ImageId=13 },
        new TarotModel{Id =14, Name = "Temperance",  Description="Temperance represents balance, harmony, and patience. It signifies finding equilibrium in all aspects of life and blending opposites to create a harmonious whole.", ImageId=14 },
        new TarotModel{Id =15, Name = "The Devil",  Description="The Devil card warns of materialism, bondage, and temptation. It signifies unhealthy attachments or habits that may be holding you back from personal freedom.", ImageId=15 },
        new TarotModel{Id =16, Name = "The Tower",  Description="The Tower represents disruption, revelation, and sudden change. It signifies a major shake-up in your life that leads to breakthroughs and new insights.", ImageId=16 },
        new TarotModel{Id =17, Name = "The Star",  Description="The Star card symbolizes hope, inspiration, and healing. It suggests a period of optimism, spiritual guidance, and renewed faith in the future.", ImageId=17 },
        new TarotModel{Id =18, Name = "The Moon",  Description="The Moon embodies intuition, uncertainty, and illusions. It represents a time when things may not be as they appear, urging you to trust your instincts and explore deeper truths.", ImageId=18 },
        new TarotModel{Id =19, Name = "The Sun",  Description="The Sun signifies positivity, vitality, and success. It represents a period of joy, clarity, and abundance in all areas of life.", ImageId=19 },
        new TarotModel{Id =20, Name = "Judgement",  Description="Judgement represents rebirth, reflection, and awakening. It signifies a time of self-evaluation, accountability, and making amends before moving forward.", ImageId=20 },
        new TarotModel{Id =21, Name = "The World",  Description="The World card signifies completion, fulfillment, and accomplishment. It represents a sense of wholeness, achievement, and reaching a significant milestone.", ImageId=21 },
        new TarotModel{Id =22, Name = "Ace of Cups",  Description="The Ace of Cups signifies emotional new beginnings, love, intuition, and compassion. It represents the potential for deep emotional fulfillment and connection.", ImageId=22 },
        new TarotModel{Id =23, Name = "Two of Cups",  Description="The Two of Cups represents partnership, connection, mutual attraction, and balance. It signifies the harmony and emotional bond between two individuals.", ImageId=23 },
        new TarotModel{Id =24, Name = "Three of Cups",  Description="The Three of Cups embodies celebration, community, friendship, and joy. It represents joyful gatherings, social connections, and shared happiness.", ImageId=24 },
        new TarotModel{Id =25, Name = "Four of Cups",  Description="The Four of Cups represents contemplation, introspection, discontent, and apathy. It signifies a period of soul-searching and evaluating your emotional state.", ImageId=25 },
        new TarotModel{Id =26, Name = "Five of Cups",  Description="The Five of Cups signifies loss, grief, disappointment, and acceptance. It represents a time of mourning what's lost and finding a path toward healing.", ImageId=26 },
        new TarotModel{Id =27, Name = "Six of Cups",  Description="The Six of Cups embodies nostalgia, innocence, memories, and childhood. It signifies reconnecting with the past, often in a sentimental and positive way.", ImageId=27 },
        new TarotModel{Id =28, Name = "Seven of Cups",  Description="The Seven of Cups represents choices, fantasy, illusion, and wishful thinking. It suggests the need to make decisions amid various tempting options.", ImageId=28 },
        new TarotModel{Id =29, Name = "Eight of Cups",  Description="The Eight of Cups signifies transition, moving on, seeking a higher purpose, and detachment. It represents a journey toward emotional growth and fulfillment.", ImageId=29 },
        new TarotModel{Id =30, Name = "Nine of Cups",  Description="The Nine of Cups embodies contentment, satisfaction, emotional fulfillment, and happiness. It signifies a period of personal joy and emotional abundance.", ImageId=30 },
        new TarotModel{Id =31, Name = "Ten of Cups",  Description="The Ten of Cups signifies harmony, love, family, and emotional fulfillment. It represents a sense of deep happiness and emotional satisfaction within the family.", ImageId=31 },
        new TarotModel{Id =32, Name = "Page of Cups",  Description="The Page of Cups embodies creativity, intuition, sensitivity, and new emotional experiences. It signifies the exploration of your creative and emotional potential.", ImageId=32 },
        new TarotModel{Id =33, Name = "Knight of Cups",  Description="The Knight of Cups is a card of romance, charm, pursuit of dreams, and emotional adventure. It represents a passionate and imaginative approach to life.", ImageId=33 },
        new TarotModel{Id =34, Name = "Queen of Cups",  Description="The Queen of Cups signifies intuition, empathy, emotional support, and nurturing. She embodies a caring and compassionate nature.", ImageId=34 },
        new TarotModel{Id =35, Name = "King of Cups",  Description="The King of Cups embodies emotional balance, control, compassion, and wisdom. He represents a master of his emotions and a source of emotional stability.", ImageId=35 },
        new TarotModel{Id =36, Name = "Ace of Pentacles",  Description="The Ace of Pentacles signifies new opportunities, prosperity, potential, and manifestation. It represents the beginning of a prosperous and practical endeavor.", ImageId=36 },
        new TarotModel{Id =37, Name = "Two of Pentacles",  Description="The Two of Pentacles represents balance, adaptability, juggling priorities, and time management. It suggests finding equilibrium in a busy and dynamic life.", ImageId=37 },
        new TarotModel{Id =38, Name = "Three of Pentacles",  Description="The Three of Pentacles embodies collaboration, teamwork, skill mastery, and recognition. It signifies the successful completion of a project through cooperation and expertise.", ImageId=38 },
        new TarotModel{Id =39, Name = "Four of Pentacles",  Description="The Four of Pentacles represents stability, conservatism, materialism, and holding onto security. It signifies a desire for financial and emotional stability but warns against excessive attachment.", ImageId=39 },
        new TarotModel{Id =40, Name = "Five of Pentacles",  Description="The Five of Pentacles signifies financial struggle, hardship, poverty, and seeking help. It represents a challenging period when assistance and resilience are needed.", ImageId=40 },
        new TarotModel{Id =41, Name = "Six of Pentacles",  Description="The Six of Pentacles represents generosity, charity, giving and receiving, and fairness. It signifies the act of sharing abundance and creating a sense of equilibrium.", ImageId=41 },
        new TarotModel{Id =42, Name = "Seven of Pentacles",  Description="The Seven of Pentacles represents assessment, patience, long-term vision, and growth. It signifies a period of evaluating progress and investing effort for future rewards.", ImageId=42 },
        new TarotModel{Id =43, Name = "Eight of Pentacles",  Description="The Eight of Pentacles represents dedication, craftsmanship, mastery, and attention to detail. It signifies the pursuit of excellence and the development of skills.", ImageId=43 },
        new TarotModel{Id =44, Name = "Nine of Pentacles",  Description="The Nine of Pentacles embodies abundance, self-sufficiency, luxury, and independence. It represents a period of enjoying the fruits of your labor and personal prosperity.", ImageId=44 },
        new TarotModel{Id =45, Name = "Ten of Pentacles",  Description="The Ten of Pentacles signifies legacy, wealth, family, and long-term success. It represents a harmonious and prosperous family and financial stability.", ImageId=45 },
        new TarotModel{Id =46, Name = "Page of Pentacles",  Description="The Page of Pentacles embodies exploration, opportunities, potential, and studiousness. It signifies a youthful and eager approach to learning and practical matters.", ImageId=46 },
        new TarotModel{Id =47, Name = "Knight of Pentacles",  Description="The Knight of Pentacles represents responsibility, reliability, determination, and dedication. It signifies a methodical and diligent pursuit of goals.", ImageId=47 },
        new TarotModel{Id =48, Name = "Queen of Pentacles",  Description="The Queen of Pentacles signifies nurturing, practicality, abundance, and financial security. She embodies a caring and resourceful nature.", ImageId=48 },
        new TarotModel{Id =49, Name = "King of Pentacles",  Description="The King of Pentacles embodies abundance, mastery, prosperity, and financial wisdom. He represents a practical and successful approach to managing wealth and resources.", ImageId=49 },
        new TarotModel{Id =50, Name = "Ace of Swords",  Description="The Ace of Swords represents clarity, truth, mental breakthroughs, and new perspectives. It signifies the power of clear thinking and intellectual insight.", ImageId=50 },
        new TarotModel{Id =51, Name = "Two of Swords",  Description="The Two of Swords is a card of decision-making, balance, choices, and stalemate. It suggests a need to weigh options carefully before making a significant choice.", ImageId=51 },
        new TarotModel{Id =52, Name = "Three of Swords",  Description="The Three of Swords embodies heartbreak, sorrow, emotional pain, and healing. It signifies a period of emotional distress and the potential for recovery.", ImageId=52 },
        new TarotModel{Id =53, Name = "Four of Swords",  Description="The Four of Swords represents rest, recuperation, contemplation, and planning. It suggests a need for mental rest and reflection before taking action.", ImageId=53 },
        new TarotModel{Id =54, Name = "Five of Swords",  Description="The Five of Swords represents conflict, defeat, power struggles, and ethical dilemmas. It signifies a situation where winning comes at a cost, and compromise may be necessary.", ImageId=54 },
        new TarotModel{Id =55, Name = "Six of Swords",  Description="The Six of Swords signifies transition, moving on, healing, and a change of perspective. It represents a journey from turbulence to calmer waters, both physically and mentally.", ImageId=55 },
        new TarotModel{Id =56, Name = "Seven of Swords",  Description="The Seven of Swords represents deception, trickery, evasion, and secrecy. It suggests a need to be cautious about hidden motives or dishonesty, either from yourself or others.", ImageId=56 },
        new TarotModel{Id =57, Name = "Eight of Swords",  Description="The Eight of Swords signifies feeling trapped, self-limiting beliefs, and seeking freedom. It suggests that perceived limitations may be more mental than physical.", ImageId=57 },
        new TarotModel{Id =58, Name = "Nine of Swords",  Description="The Nine of Swords embodies anxiety, worry, fear, and insomnia. It represents a state of mental distress and the need to confront and alleviate inner fears.", ImageId=58 },
        new TarotModel{Id =59, Name = "Ten of Swords",  Description="The Ten of Swords represents endings, transformation, rock bottom, and release. It signifies a finality to a challenging situation and the potential for rebirth.", ImageId=59 },
        new TarotModel{Id =60, Name = "Page of Swords",  Description="The Page of Swords embodies curiosity, intellect, investigation, and communication. It signifies the pursuit of knowledge and the use of wit and reason.", ImageId=60 },
        new TarotModel{Id =61, Name = "Knight of Swords",  Description="The Knight of Swords is a card of action, determination, impulsiveness, and assertiveness. It represents a swift and direct approach to challenges.", ImageId=61 },
        new TarotModel{Id =62, Name = "Queen of Swords",  Description="The Queen of Swords signifies independence, clarity, wisdom, and direct communication. She embodies a no-nonsense and straightforward demeanor.", ImageId=62 },
        new TarotModel{Id =63, Name = "King of Swords",  Description="The King of Swords embodies authority, intellect, logic, and leadership. He represents a strong, rational, and principled leader or mentor.", ImageId=63 },
        new TarotModel{Id =64, Name = "Ace of Wands",  Description="The Ace of Wands represents inspiration, new opportunities, potential, and growth. It signifies the spark of a creative or passionate endeavor.", ImageId=64 },
        new TarotModel{Id =65, Name = "Two of Wands",  Description=" The Two of Wands is a card of planning, choices, progress, and exploration. It suggests a need to make decisions and set goals for the future.", ImageId=65 },
        new TarotModel{Id =66, Name = "Three of Wands",  Description="The Three of Wands signifies expansion, foresight, leadership, and preparation. It represents a period of anticipating success and taking steps toward it.", ImageId=66 },
        new TarotModel{Id =67, Name = "Four of Wands",  Description="The Four of Wands embodies celebration, harmony, milestones, and homecoming. It symbolizes a time of joyful gatherings and achievements in both personal and communal life.", ImageId=67 },
        new TarotModel{Id =68, Name = "Five of Wands",  Description="The Five of Wands represents competition, conflict, challenges, and diversity. It signifies a period of overcoming obstacles and learning through rivalry.", ImageId=68 },
        new TarotModel{Id =69, Name = "Six of Wands",  Description="The Six of Wands signifies victory, recognition, pride, and success. It represents a time when your efforts are rewarded, and you receive acknowledgment for your achievements.", ImageId=69 },
        new TarotModel{Id =70, Name = "Seven of Wands",  Description="he Seven of Wands represents defensiveness, perseverance, determination, and resilience. It signifies standing your ground and protecting your beliefs or territory.", ImageId=70 },
        new TarotModel{Id =71, Name = "Eight of Wands",  Description="The Eight of Wands is a card of swiftness, progress, movement, and messages. It suggests that events are unfolding rapidly, and communication is essential.", ImageId=71 },
        new TarotModel{Id =72, Name = "Nine of Wands",  Description="The Nine of Wands embodies resilience, courage, persistence, and strength. It signifies the strength to carry on despite challenges and setbacks.", ImageId=72 },
        new TarotModel{Id =73, Name = "Ten of Wands",  Description="The Ten of Wands represents a burden, responsibility, overexertion, and hard work. It suggests a need to lighten your load or delegate tasks.", ImageId=73 },
        new TarotModel{Id =74, Name = "Page of Wands",  Description="The Page of Wands embodies exploration, discovery, enthusiasm, and free-spiritedness. It signifies a youthful and adventurous spirit, eager to explore new opportunities.", ImageId=74 },
        new TarotModel{Id =75, Name = "Knight of Wands",  Description="The Knight of Wands is a card of action, adventure, energy, and impulsiveness. It represents pursuing your passions with enthusiasm and determination.", ImageId=75 },
        new TarotModel{Id =76, Name = "Queen of Wands",  Description="The Queen of Wands signifies passion, confidence, leadership, and determination. She embodies a charismatic and nurturing presence.", ImageId=76 },
        new TarotModel{Id =77, Name = "King of Wands",  Description="The King of Wands embodies vision, entrepreneurship, charisma, and inspiration. He represents a natural leader who is passionate about his endeavors.", ImageId=77 },
        




        };
        [HttpGet("{numOfCards:int}")]
        public TarotModel[] Get(int numOfCards)
        {
            TarotModel[] items = Items.ToArray();
            TarotModel[] outputTarotCards=new TarotModel[numOfCards];
            Random rand = new Random();
            
           
            for (int i=0;i<numOfCards; i++) {
                int index = rand.Next(0, items.Length);
                while (outputTarotCards.Contains(items[index])) {
                    index = rand.Next(0, items.Length);
                }
                outputTarotCards[i] = items[index];

            }
            
            return outputTarotCards;
            //return 
        }
    }
}
