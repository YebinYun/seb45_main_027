package com.project.bbibbi.domain.tipReplyLike.entity;

import com.project.bbibbi.domain.member.entity.Member;
import com.project.bbibbi.domain.tipReply.entity.TipReply;
import com.project.bbibbi.global.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class TipReplyLike extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tipReplyLikeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tip_reply_id", nullable = false)
    private TipReply tipReply;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Transient
    private Boolean likeYn;

    @Transient
    private Integer likeCount;

}
