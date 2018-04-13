using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Curve.Startup))]
namespace Curve
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
