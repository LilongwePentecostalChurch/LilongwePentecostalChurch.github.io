import { useParams, Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Book } from 'lucide-react';
import { MinistryTemplate } from './MinistryTemplate';
import { ministriesData } from '../../data/ministriesData';
import { sanityClient, urlFor } from '../../../lib/sanityClient';
import { usePageTitle } from '../../../lib/usePageTitle';

export function MinistryPage() {
  const { ministryId } = useParams<{ ministryId: string }>();
  const [ministry, setMinistry] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  usePageTitle(ministry?.name);

  useEffect(() => {
    if (!ministryId) return;

    sanityClient
      .fetch(
        `*[_type == "ministry" && id.current == $id][0] {
          "id": id.current,
          name, tagline, aboutTitle, aboutText,
          leaderName, leaderTitle, leaderBio,
          meetingDay, meetingTime, location,
          phone, email, whatsapp,
          heroImage, leaderPhoto,
          values, galleryImages, upcomingEvents
        }`,
        { id: ministryId }
      )
      .then((data: any) => {
        if (data) {
          // Map Sanity data to the shape MinistryTemplate expects
          setMinistry({
            id: data.id,
            name: data.name,
            icon: Book, // default icon — Sanity doesn't store React components
            tagline: data.tagline ?? '',
            heroImage: data.heroImage ? urlFor(data.heroImage).width(1200).url() : '',
            aboutTitle: data.aboutTitle ?? 'Who We Are',
            aboutText: data.aboutText ?? [],
            values: (data.values ?? []).map((v: any) => ({
              icon: Book,
              name: v.name,
              description: v.description,
            })),
            leaderPhoto: data.leaderPhoto ? urlFor(data.leaderPhoto).width(300).url() : '',
            leaderName: data.leaderName ?? '',
            leaderTitle: data.leaderTitle ?? '',
            leaderBio: data.leaderBio ?? '',
            meetingDay: data.meetingDay ?? '',
            meetingTime: data.meetingTime ?? '',
            location: data.location ?? 'LPC Main Campus',
            phone: data.phone ?? '',
            email: data.email ?? '',
            whatsapp: data.whatsapp ?? '',
            galleryImages: (data.galleryImages ?? []).map((g: any) => ({
              src: g.image ? urlFor(g.image).width(800).url() : '',
              caption: g.caption ?? '',
            })),
            rotatingGallery: (data.galleryImages ?? []).map((g: any) => ({
              src: g.image ? urlFor(g.image).width(800).url() : '',
              caption: g.caption ?? '',
            })),
            upcomingEvents: data.upcomingEvents ?? [],
          });
        } else {
          // Fall back to static data if not found in Sanity
          const staticMinistry = ministriesData.find(m => m.id === ministryId);
          if (staticMinistry) {
            setMinistry(staticMinistry);
          } else {
            setNotFound(true);
          }
        }
      })
      .catch(() => {
        // On error fall back to static data
        const staticMinistry = ministriesData.find(m => m.id === ministryId);
        if (staticMinistry) {
          setMinistry(staticMinistry);
        } else {
          setNotFound(true);
        }
      })
      .finally(() => setLoading(false));
  }, [ministryId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A0500]">
        <p className="font-['Montserrat'] text-white/60 text-lg">Loading ministry...</p>
      </div>
    );
  }

  if (notFound || !ministry) {
    return <Navigate to="/" replace />;
  }

  return <MinistryTemplate ministry={ministry} allMinistries={ministriesData} />;
}
