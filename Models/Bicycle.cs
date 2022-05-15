using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BikeCheck.Models
{
    public class Bicycle
    {
        // need to to add something for images?
        public int Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }

        [Required(ErrorMessage = "Please enter a title for your bicycle.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Please enter a description for your bicycle."), MaxLength(500)]
        public string Description { get; set; }

        [MaxLength(100)]
        public string Frame { get; set; }

        public string Fork { get; set; }
        public string Saddle { get; set; }
        public string Handlebar { get; set; }
        public string BottomBracket { get; set; }
        public string ChainRing { get; set; }
        public string RearCog { get; set; }
        public string Crank { get; set; }
        public string WheelSet { get; set; }
        public string Pedals { get; set; }

        [MaxLength(500)]
        public string Other { get; set; }
        
        public List<Review> Reviews { get; set; }


    }
}