export type Post = {
    text: string;
    url: string;
    interests: string[];
    image: string;
    type: 'text_title' | 'text_long' | 'text_citation' | 'img' | 'social_tweet' | 'url';
    coordinates: number[];
    story_id: string;
    hashtags: string[];
    type_access: string;
    date: { create: Date; update: Date};
    info: {
        like_by: Number;
        shared_by: Number
    };
    order: Number
};
