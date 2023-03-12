using System.ComponentModel.DataAnnotations.Schema;
using System.Security.AccessControl;

namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }


        //nav props
        public int ProductId { get; set; }

        public Product Product { get; set; }

        public int BasketId { get; set; }

        public Basket Basket { get; set; }
    }
}