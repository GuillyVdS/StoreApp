using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    
    public class BaseApiController : ControllerBase
    {
        
    }
}