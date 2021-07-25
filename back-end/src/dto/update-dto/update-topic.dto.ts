export class UpdateTopicDto {
    readonly topicName: string;
    readonly description: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}