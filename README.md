# APL Transitions

This is collection of transitions for APL components implemented with AnimateItem. All the transitiosn are derived from css transitions available in [Animate.css](https://github.com/daneden/animate.css)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/arjunganesan)

# Usage

## Adding Transitions to APL Document

### Using Import

Copy the file [apl-transitions.json](https://github.com/arjun-g/apl-transitions/blob/master/dist/apl-transitions.json) to any storage of your choice with public access. And it can be imported into APL.

```json
{
    "type": "APL",
    "version": "1.1",
    "import": [
        {
            "name": "apl-transitions",
            "version": "https://yourdomain.com/<path>/apl-transitions.json"
        }
    ]
    ....
}
```

### Using User Defined Commands

If you want to use only few transitions then you can just copy those transitions to "commands" in APL

```json
{
    "type": "APL",
    "version": "1.1",
    "import": [],
    "commands": {
        "fadeIn": {
            ....
        },
        "fadeOut": {
            ....
        }
    }
    ....
}
```

## Attaching to Component

Transition can be added to components by adding it to the onMount event

```json
{
    "type": "Text",
    "text": "APL 1.1 Transitions",
    "onMount: [
        {
            "type": "fadeIn",
            "duration": 1000
        }
    ],
    ....
}
```

### Parameters

#### duration `(in milliseconds)` `Required`

Total duration of transition. Advised to be shorter. Required for all transitions

#### delay `(in milliseconds)` `Optional`

Adds a optional delay to transitions before it starts

#### distance `(Dimension)` `Optional` `Only for few transition`

For few transitions you can configure the distance parameter to control the animation

# Transitions

Here is the list of transitions available as User Defind Commands:

| User Defined Commands                          |                                                 |                                                |                                                |
| ---------------------------------------------- | ----------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| backInDown<br />`(duration,delay)`             | backInLeft<br />`(duration,delay)`              | backInRight<br />`(duration,delay)`            | backInUp<br />`(duration,delay)`               |
| backOutDown<br />`(duration,delay)`            | backOutLeft<br />`(duration,delay)`             | backOutRight<br />`(duration,delay)`           | backOutUp<br />`(duration,delay)`              |
| bounce<br />`(duration,delay)`                 | bounceIn<br />`(duration,delay)`                | bounceInDown<br />`(duration,distance,delay)`  | bounceInLeft<br />`(duration,distance,delay)`  |
| bounceInRight<br />`(duration,distance,delay)` | bounceInUp<br />`(duration,distance,delay)`     | bounceOut<br />`(duration,delay)`              | bounceOutDown<br />`(duration,distance,delay)` |
| bounceOutLeft<br />`(duration,distance,delay)` | bounceOutRight<br />`(duration,distance,delay)` | bounceOutUp<br />`(duration,distance,delay)`   | fadeIn<br />`(duration,delay)`                 |
| fadeInBottomLeft<br />`(duration,delay)`       | fadeInBottomRight<br />`(duration,delay)`       | fadeInDown<br />`(duration,distance,delay)`    | fadeInLeft<br />`(duration,distance,delay)`    |
| fadeInRight<br />`(duration,distance,delay)`   | fadeInTopLeft<br />`(duration,delay)`           | fadeInTopRight<br />`(duration,delay)`         | fadeInUp<br />`(duration,distance,delay)`      |
| fadeOut<br />`(duration,delay)`                | fadeOutBottomLeft<br />`(duration,delay)`       | fadeOutBottomRight<br />`(duration,delay)`     | fadeOutDown<br />`(duration,distance,delay)`   |
| fadeOutLeft<br />`(duration,distance,delay)`   | fadeOutRight<br />`(duration,distance,delay)`   | fadeOutTopLeft<br />`(duration,delay)`         | fadeOutTopRight<br />`(duration,delay)`        |
| fadeOutUp<br />`(duration,distance,delay)`     | flash<br />`(duration,delay)`                   | headShake<br />`(duration,delay)`              | heartBeat<br />`(duration,delay)`              |
| hinge<br />`(duration,delay)`                  | jackInTheBox<br />`(duration,delay)`            | jello<br />`(duration,delay)`                  | lightSpeedIn<br />`(duration,delay)`           |
| lightSpeedInLeft<br />`(duration,delay)`       | lightSpeedInRight<br />`(duration,delay)`       | lightSpeedOut<br />`(duration,distance,delay)` | lightSpeedOutLeft<br />`(duration,delay)`      |
| lightSpeedOutRight<br />`(duration,delay)`     | pulse<br />`(duration,delay)`                   | rollIn<br />`(duration,delay)`                 | rollOut<br />`(duration,delay)`                |
| rotateIn<br />`(duration,delay)`               | rotateInDownLeft<br />`(duration,delay)`        | rotateInDownRight<br />`(duration,delay)`      | rotateInUpLeft<br />`(duration,delay)`         |
| rotateInUpRight<br />`(duration,delay)`        | rotateOut<br />`(duration,delay)`               | rotateOutDownLeft<br />`(duration,delay)`      | rotateOutDownRight<br />`(duration,delay)`     |
| rotateOutUpLeft<br />`(duration,delay)`        | rotateOutUpRight<br />`(duration,delay)`        | rubberBand<br />`(duration,delay)`             | shake<br />`(duration,delay)`                  |
| shakeX<br />`(duration,delay)`                 | shakeY<br />`(duration,delay)`                  | slideInDown<br />`(duration,distance,delay)`   | slideInLeft<br />`(duration,distance,delay)`   |
| slideInRight<br />`(duration,distance,delay)`  | slideInUp<br />`(duration,distance,delay)`      | slideOutDown<br />`(duration,distance,delay)`  | slideOutLeft<br />`(duration,distance,delay)`  |
| slideOutRight<br />`(duration,distance,delay)` | slideOutUp<br />`(duration,distance,delay)`     | swing<br />`(duration,delay)`                  | tada<br />`(duration,delay)`                   |
| wobble<br />`(duration,delay)`                 | zoomIn<br />`(duration,delay)`                  | zoomInDown<br />`(duration,distance,delay)`    | zoomInLeft<br />`(duration,distance,delay)`    |
| zoomInRight<br />`(duration,distance,delay)`   | zoomInUp<br />`(duration,distance,delay)`       | zoomOut<br />`(duration,delay)`                | zoomOutDown<br />`(duration,distance,delay)`   |
| zoomOutLeft<br />`(duration,distance,delay)`   | zoomOutRight<br />`(duration,distance,delay)`   | zoomOutUp<br />`(duration,distance,delay)`     |                                                |
