const items = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/df/07/b6/df07b64e649b116d848e1c6872a3b92d.jpg',
        description: "Now offering custom widebody kits out of wood, cardboard, or metal.   These kits allow you to put the biggest, widest, fattest tires you'd like.   Contact us for pricing information.   "
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/564x/1a/8e/a7/1a8ea7dd3303ffc5927a6f8e34dd2583.jpg',
        description: "We also offer fiberglass work.  We can make you a wing on top of a wing on top of a wing on top of a wing.   Think of all the downforce you can achieve with this mod."
    },
    {
        id: 3,
        image: 'https://www.jcwhitney.com/blog/wp-content/uploads/2016/03/6a.jpg',
        description: "Does your neighbor have a bigger exhaust than you?   Show him up who's boss with a new, custom exhaust system by slow performance.   Gold lady sold separately"
    },
    {
        id: 4,
        image: 'https://inspiredot.net/wp-content/uploads/2018/12/Top-15-Worst-Car-Mods-Ever-Seen-2.jpg',
        description: "Having a hard time navigating parking lots?   Add a custom bumper guard to your vehicle to prevent bumper damage.   Just pull on in and these chickens will tell you when to stop."
    },
    {
        id: 5,
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--SWpHSL97--/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/18nc6nmfhrzzujpg.jpg',
        description: "Have too many kids and having issues getting them to the store.   We'll extend your passenger section for you.   Custom sunroof included at extra cost."
    }
]

    // get (view) request for services
    const getServices = (req, res) => {
        res.json(items);
      };

      module.exports = {
    getServices
    };