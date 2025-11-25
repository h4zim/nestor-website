export class HomeModel {
    data: HomeData;
    meta: MetaData;
}

export class HomeData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    ThemeColor: ThemeData
    Section1Text1: string;
    Section1Text2Bold: string;
    Section1Text2Normal: string;
    Section1Text3: string;
    Section4Text1: string;
    Section4Text2Bold: string;
    Section4Text2Normal: string;
    Section4Text3: string;
    Section4Text4: string;
    Section5Video: VideoData;
    Section6Text1Normal: string;
    Section6Text1Bold: string;
    Section7Text1: string;
    Section7Text2: string;
    Section8Text1: string;
    Section10Text1: string;
    Section11Text1: string;
    Section9Text1Bold: string;
    Section9Text1Normal: string;
    Section9Text2: string;
    Section9Text3: string;
    Section2Image: ImageData;
    Section3Feature: Section3FeatureData[];
    Section5Service: Section5ServiceData[];
    Section6Work: Section6WorkData[];
    Section8Client: Section8ClientData[];
    Section9Image1: ImageData;
    Section10Image1: ImageData[];
    Section11Insight: Section11InsightData[];
    Section7Image1: ImageData;
}

export class ImageData {
    id: number;
    name: string;
    url: string;
}

export class VideoData {
    id: number;
    name: string;
    url: string;
}

export class Section3FeatureData {
    id: number;
    TextTitle: string;
    TextDescription: string;
    Icon: ImageData;
}

export class Section5ServiceData {
    id: number;
    TextTitle: string;
    TextDescription: string;
    TextEnd: string;
}

export class Section6WorkData {
    id: number;
    TextTitle: string;
    TextDescription: string;
    Image: ImageData;
}

export class Section8ClientData {
    id: number;
    Name: string;
    TextDescription: string;
    Avatar: ImageData;
}

export class Section11InsightData {
    id: number;
    TextName: string;
    TextPosition: string;
    TextType: string;
    TextDate: string;
    TextTitle: string;
    TextDescription: string;
    Avatar: ImageData;
}

export class MetaData {
    pagination: PaginationData;
}

export class PaginationData {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export class ThemeData {
    id: number;
    ColorCode: string;
}