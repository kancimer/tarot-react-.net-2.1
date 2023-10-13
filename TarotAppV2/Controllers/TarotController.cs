/*namespace TarotAppV2.Controllers
{
    public class TarotController
    {
        
    }
}*/
//original, ide moje:
//staviti da et vraca array, dodati int u fetch
//srediti fotke
//local history
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


using TarotAppV2.Models;

namespace TarotAppV2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TarotController : ControllerBase
    {
        private static readonly IEnumerable<TarotModel> Items = new[]
        {

        new TarotModel{Id =0, Name = "The Fool",  Description="The Fool is passionate and unknowing.", ImageId=0 },
        new TarotModel{Id =1, Name = "The Magician",  Description="Wise and master of all elements.", ImageId=1 },
        new TarotModel{Id =2, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =3, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =4, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =5, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =6, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =7, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =8, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =9, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =10, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =11, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =12, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =13, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =14, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =15, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =16, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =17, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =18, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =19, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =20, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =22, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =21, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =22, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =23, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =24, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =25, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =26, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =27, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =28, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =29, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =30, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =31, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =32, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =33, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =34, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =35, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =36, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =37, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =38, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =39, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =40, Name = "The Fool",  Description="The Fool is passionate and unknowing.", ImageId=0 },
        new TarotModel{Id =41, Name = "The Magician",  Description="Wise and master of all elements.", ImageId=1 },
        new TarotModel{Id =42, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =43, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =44, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =45, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =46, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =47, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =48, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =49, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =50, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =51, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =52, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =53, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =54, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =55, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =56, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =57, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =58, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =59, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =60, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =61, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =62, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =63, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =64, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =65, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =66, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =67, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =68, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =69, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =70, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =71, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =72, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =73, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =74, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =75, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =76, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =77, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        new TarotModel{Id =78, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 },
        





        };
        //[HttpGet("{numOfCards:int}")]
        [HttpGet]
        /*public List<TarotModel> Get(int cardNumber)
        {
            var rand = new Random();
            //bracino:
            //var cards = Items.ToList();
            var cards = Items.ToArray();
            //bracino:
            //cards.OrderBy(x => Guid.NewGuid()).Take(cardNumber);

            //Random r = new Random();
            //List<TarotModel> threeRandom = cards.OrderBy(x => r.Next()).Take(cardNumber);
            //Items[rand.Next(Items.Length)];
            //Items.Where(i => i.ItemType == itemType).ToArray();
            return cards[cardNumber];
            
        }*/
        public TarotModel[] Get()
        {
            TarotModel[] items = Items.ToArray();
            return items;
            //return 
        }

    }
}
