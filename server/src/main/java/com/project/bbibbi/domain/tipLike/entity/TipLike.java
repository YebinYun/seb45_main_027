package com.project.bbibbi.domain.tipLike.entity;

import com.project.bbibbi.domain.member.entity.Member;
import com.project.bbibbi.domain.tip.entity.Tip;
import com.project.bbibbi.global.entity.BaseEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class TipLike extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tipLikeId;

    @Column
    private int likeCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tip_id", nullable = false)
    private Tip tip;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    public TipLike() {
        this.likeCount = 0;
    }

    // Getter/Setter 메서드
/*
    // 좋아요 카운트 증가 메서드
    public void increaseLikeCount() {
        this.likeCount++;
    }

    // 좋아요 카운트 감소 메서드
    public void decreaseLikeCount() {
        this.likeCount--;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }
    */
}
