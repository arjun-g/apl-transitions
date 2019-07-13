# APL Transitions

This is collection of transitions for APL components implemented with AnimateItem. All the transitiosn are derived from css transitions available in [Animate.css](https://github.com/daneden/animate.css)

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

#### duration `(in milliseconds)` ` Required `
Total duration of transition. Advised to be shorter. Required for all transitions

#### delay `(in milliseconds)` ` Optional `
Adds a optional delay to transitions before it starts

#### distance `(Dimension)` `Optional` `Only for few transition`
For few transitions you can configure the distance parameter to control the animation

# Transitions

Here is the list of transitions available as User Defind Commands:

| User Defined Commands        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `tada`             | `wobble`            | `jello`              |
| `bounceIn`        | `bounceInDown`     | `bounceInLeft`      | `bounceInRight`      |
| `bounceInUp`      | `bounceOut`        | `bounceOutDown`     | `bounceOutLeft`      |
| `bounceOutRight`   | `bounceOutUp`      | `fadeIn`            | `fadeInDown`         |
| `fadeInLeft`      | `fadeInRight`      | `fadeInUp`          | `fadeOut`            |
| `fadeOutDown`      | `fadeOutLeft`      | `fadeOutRight`      | `fadeOutUp`          |
| `lightSpeedIn`    | `lightSpeedOut`    | `rotateIn`          | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |