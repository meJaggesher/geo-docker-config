
/**
 * Dynamic From Generator Config File..
 * Only supports Text and Select Type
 * For select provide options as value array.. (You must be provide)
 */

export const myFromConfig = [
    {
        'name': 'dataset1',
        'formItems': [
            {
                'type': 'select',
                'name': 'Layer1',
                'placeholder': 'Select Layer1',
                'values': [12, 3, 4, 5, 6]
            },
            {
                'type': 'select',
                'name': 'Layer2',
                'placeholder': 'Select Layer2',
                'values': [2, 3, 4, 5, 6]
            },
            {
                'type': 'text',
                'name': 'Layer3',
                'placeholder': 'Enter Layer3'
            },
            {
                'type': 'text',
                'name': 'Layer4',
                'placeholder': 'Enter Layer4'
            },
        ]
    },
    {
        'name': 'dataset2',
        'formItems': [
            {
                'type': 'select',
                'name': 'Layer1',
                'placeholder': 'Select Layer1',
                'values': [23, 3, 4, 5, 6]
            },
            {
                'type': 'select',
                'name': 'Layer2',
                'placeholder': 'Select Layer2',
                'values': [24, 3, 4, 5, 6]
            },
            {
                'type': 'text',
                'name': 'Layer3',
                'placeholder': 'Enter Layer3'
            },
            {
                'type': 'text',
                'name': 'Layer4',
                'placeholder': 'Enter Layer4'
            },
        ]
    }
]